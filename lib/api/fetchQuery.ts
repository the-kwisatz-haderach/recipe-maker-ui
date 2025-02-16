import { cookies } from 'next/headers'
import 'server-only'
import { getConfig } from '../config'

const { apiBasePath } = getConfig()

const waitFor = (duration = 0) =>
  new Promise((resolve) => setTimeout(resolve, duration))

export const fetchQuery = async <T>(query: string): Promise<T | null> => {
  await waitFor(3000)
  const res = await fetch(`${apiBasePath}/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Cookie: cookies().toString(),
    },
    body: JSON.stringify({ query }),
  })
  if (!res.ok) {
    return null
  }
  const { data } = await res.json()
  return data
}
