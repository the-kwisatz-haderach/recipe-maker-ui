import { NextRequest } from 'next/server'
import { getConfig } from '@/lib/config'

const { apiBasePath } = getConfig()

export async function POST(req: NextRequest) {
  try {
    const res = await fetch(`${apiBasePath}/login`, {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    if (!res.ok) {
      return Response.json(
        { message: 'invalid credentials' },
        {
          status: 401,
        }
      )
    }
    const [cookie] = res.headers.getSetCookie()
    return Response.json(
      { message: 'success' },
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
