import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  if (!/(\..+|health|signup)$/.test(req.url)) {
    const cookie = req.cookies.get('session-cookie')
    if (!cookie?.value && !req.url.includes('/login')) {
      const url = new URL(req.url)
      return NextResponse.redirect(
        new URL(`${url.protocol}//${url.host}/login`)
      )
    }
  }
  return NextResponse.next()
}
