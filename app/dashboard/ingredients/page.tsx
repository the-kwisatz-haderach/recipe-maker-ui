import React from 'react'
import { fetchQuery } from '@/lib/api/fetchQuery'
import { Ingredient } from '@/lib/api/generated/graphql'
import { IngredientsQuery } from '@/lib/api/operations'
import Heading from '@/components/Heading/Heading'

export default async function Page() {
  const data = await fetchQuery<{ ingredients: Ingredient[] }>(IngredientsQuery)
  return (
    <div>
      <Heading tag="h2">Ingredients</Heading>
      <ul>
        {data?.ingredients.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
    </div>
  )
}
