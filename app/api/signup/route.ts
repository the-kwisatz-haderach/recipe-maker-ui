import { getConfig } from '@/lib/config'

const { apiBasePath } = getConfig()

export async function POST(req: Request) {
  try {
    const res = await fetch(`${apiBasePath}/signup`, {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!res.ok) {
      return Response.json(
        { message: 'user already exists' },
        {
          status: 401,
        }
      )
    }
    const [cookie] = res.headers.getSetCookie()
    return Response.json(
      { message: 'signup success' },
      {
        status: 200,
        headers: {
          'Set-Cookie': cookie,
        },
      }
    )
  } catch (err) {
    console.error(err)
    return new Response(undefined, { status: 500 })
  }
}
