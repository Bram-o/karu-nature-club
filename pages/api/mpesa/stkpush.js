import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { phone, amount, memberId } = req.body

    if (!phone || !amount || !memberId) {
        return res.status(400).json({ error: 'phone, amount and memberId are required' })
    }

    try {
        // Step 1: Get token
        const credentials = Buffer.from(
            `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
        ).toString('base64')

        const tokenRes = await fetch(
            'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
            {
                method: 'GET',
                headers: { Authorization: `Basic ${credentials}` }
            }
        )
        const tokenData = await tokenRes.json()
        const token = tokenData.access_token

        if (!token) {
            return res.status(500).json({ error: 'Could not get M-Pesa token' })
        }

        // Step 2: Build password and timestamp
        const timestamp = new Date()
            .toISOString()
            .replace(/[^0-9]/g, '')
            .slice(0, 14)

        const password = Buffer.from(
            `${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`
        ).toString('base64')

        // Step 3: Format phone number (0712345678 → 254712345678)
        const formattedPhone = phone.startsWith('0')
            ? '254' + phone.slice(1)
            : phone.startsWith('+')
                ? phone.slice(1)
                : phone

        // Step 4: Send STK Push
        const stkRes = await fetch(
            'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    BusinessShortCode: process.env.MPESA_SHORTCODE,
                    Password: password,
                    Timestamp: timestamp,
                    TransactionType: 'CustomerPayBillOnline',
                    Amount: amount,
                    PartyA: formattedPhone,
                    PartyB: process.env.MPESA_SHORTCODE,
                    PhoneNumber: formattedPhone,
                    CallBackURL: process.env.MPESA_CALLBACK_URL,
                    AccountReference: `NatureClub-${memberId}`,
                    TransactionDesc: 'Nature Club Registration Fee'
                })
            }
        )

        const stkData = await stkRes.json()

        if (stkData.ResponseCode !== '0') {
            return res.status(400).json({ error: stkData.errorMessage || 'STK Push failed' })
        }

        // Step 5: Save pending payment to Supabase
        await supabase.from('payments').insert([{
            member_id: memberId,
            amount: amount,
            status: 'pending',
            checkout_request_id: stkData.CheckoutRequestID
        }])

        return res.status(200).json({
            success: true,
            checkoutRequestId: stkData.CheckoutRequestID,
            message: 'STK Push sent. Ask user to check their phone.'
        })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}