import { getConfig } from '@/lib/config'

export const dynamic = 'force-dynamic'

const { apiBasePath } = getConfig()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const res = await fetch(`${apiBasePath}/signup`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    if (!res.ok) {
      const json = await res.json()
      return Response.json({ error: json }, { status: 401 })
    }
    return new Response(undefined, {
      status: 302,
      headers: {
        Location: '/login',
      },
    })
  } catch (err) {
    console.error(err)
    return new Response(undefined, { status: 500 })
  }
}
