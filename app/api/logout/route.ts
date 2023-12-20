import { NextResponse } from 'next/server'
import { getConfig } from '@/lib/config'

const { apiBasePath } = getConfig()

export async function GET(req: Request) {
  const res = await fetch(`${apiBasePath}/logout`)
  const text = await res.text()
  if (!res.ok) {
    return Response.json({ error: text }, { status: 401 })
  }
  const [cookie] = res.headers.getSetCookie()
  return NextResponse.redirect(new URL('/', req.url), {
    status: 302,
    headers: {
      'Set-Cookie': cookie,
    },
  })
}
