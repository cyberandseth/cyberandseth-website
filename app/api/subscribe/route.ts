import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, first_name } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
    }

    const apiKey = process.env.KIT_API_KEY
    const formId = process.env.KIT_FORM_ID

    if (!apiKey || !formId) {
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
    }

    const ckRes = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          api_key: apiKey,
          email,
          ...(first_name ? { first_name } : {}),
        }),
      }
    )

    if (!ckRes.ok) {
      const text = await ckRes.text()
      console.error('ConvertKit error:', text)
      return NextResponse.json({ error: 'Subscription failed.' }, { status: 502 })
    }

    const data = await ckRes.json()
    return NextResponse.json({ success: true, data })
  } catch (err) {
    console.error('Subscribe route error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
