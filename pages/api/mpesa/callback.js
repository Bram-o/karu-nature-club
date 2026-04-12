import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const callback = req.body?.Body?.stkCallback

        if (!callback) {
            return res.status(400).json({ error: 'Invalid callback data' })
        }

        const { ResultCode, CheckoutRequestID, CallbackMetadata } = callback

        if (ResultCode === 0) {
            // Payment was successful
            const items = CallbackMetadata.Item
            const receipt = items.find(i => i.Name === 'MpesaReceiptNumber')?.Value
            const amount = items.find(i => i.Name === 'Amount')?.Value
            const phone = items.find(i => i.Name === 'PhoneNumber')?.Value

            // Update payment record
            await supabase
                .from('payments')
                .update({
                    status: 'success',
                    payment_reference: receipt
                })
                .eq('checkout_request_id', CheckoutRequestID)

            // Update member payment status
            const formattedPhone = '0' + String(phone).slice(-9)

            await supabase
                .from('members')
                .update({ payment_status: 'paid' })
                .eq('phone', formattedPhone)

        } else {
            // Payment failed or was cancelled
            await supabase
                .from('payments')
                .update({ status: 'failed' })
                .eq('checkout_request_id', CheckoutRequestID)
        }

        // Always respond with success to Safaricom
        return res.status(200).json({ ResultCode: 0, ResultDesc: 'Accepted' })

    } catch (error) {
        console.error('Callback error:', error)
        return res.status(200).json({ ResultCode: 0, ResultDesc: 'Accepted' })
    }
}