import { getConfig } from '@/lib/config'

export const dynamic = 'force-dynamic'

export async function GET(_: Request) {
  const config = getConfig()
  const res = await fetch(`${config.apiBasePath}/logout`)
  const text = await res.text()
  if (!res.ok) {
    return Response.json({ error: text }, { status: 401 })
  }
  const [cookie] = res.headers.getSetCookie()
  return new Response(undefined, {
    status: 302,
    headers: {
      'Set-Cookie': cookie,
      Location: '/',
    },
  })
}
