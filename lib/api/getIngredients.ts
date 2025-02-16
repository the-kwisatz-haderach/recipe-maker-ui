import { cookies } from 'next/headers'
import 'server-only'
import { getConfig } from '../config'
import { Ingredient } from './generated/graphql'
import { IngredientsQuery as query } from './operations'

const { apiBasePath } = getConfig()

export const getIngredients = async (): Promise<Ingredient[]> => {
  const res = await fetch(`${apiBasePath}/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Cookie: (await cookies()).toString(),
    },
    body: JSON.stringify({ query }),
  })
  if (!res.ok) {
    return []
  }
  const json = await res.json()
  return json.data?.ingredients || []
}
