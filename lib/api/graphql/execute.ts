import { cookies } from 'next/headers'
import 'server-only'
import { getConfig } from '@/lib/config'
import type { TypedDocumentString } from './graphql'

const { apiBasePath } = getConfig()

export async function execute<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  const response = await fetch(`${apiBasePath}/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/graphql-response+json',
      Cookie: (await cookies()).toString(),
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  if (!response.ok) {
    console.error('failure to fetch query: ', query)
    return null
  }
  const { data } = await response.json()
  return data as TResult
}
