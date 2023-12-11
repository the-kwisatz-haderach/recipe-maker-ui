import { getConfig } from '@/lib/config'

export const dynamic = 'force-dynamic'

const config = getConfig()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const res = await fetch(`${config.apiBasePath}/login`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    const [cookie] = res.headers.getSetCookie()
    if (!res.ok || !cookie) {
      const json = await res.json()
      return Response.json({ error: json }, { status: 401 })
    }
    return new Response(undefined, {
      status: 302,
      headers: {
        'Set-Cookie': cookie,
        Location: '/',
      },
    })
  } catch (err) {
    console.error(err)
    return new Response(undefined, { status: 500 })
  }
}
