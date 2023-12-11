import 'server-only'
import { cookies } from 'next/headers'

import { getConfig } from '../config'

const query = `query Ingredients {
  ingredients {
    name,
    id
  }
}`

const { apiBasePath } = getConfig()

export const getIngredients = async () => {
  const res = await fetch(`${apiBasePath}/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Cookie: cookies().toString(),
    },
    body: JSON.stringify({ query }),
  })
  const json = await res.json()
  if (!res.ok) {
    return []
  }
  return json.data?.ingredients || []
}
