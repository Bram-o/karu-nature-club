export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const credentials = Buffer.from(
            `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
        ).toString('base64')

        const response = await fetch(
            'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
            {
                method: 'GET',
                headers: {
                    Authorization: `Basic ${credentials}`
                }
            }
        )

        const data = await response.json()

        if (!data.access_token) {
            return res.status(500).json({ error: 'Failed to get token' })
        }

        return res.status(200).json({ token: data.access_token })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}