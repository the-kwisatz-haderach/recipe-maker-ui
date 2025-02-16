import React from 'react'
import { graphql } from '@/lib/api/graphql'
import { execute } from '@/lib/api/graphql/execute'
import Heading from '@/components/Heading/Heading'

const ingredientsQuery = graphql(`
  query Ingredients {
    ingredients {
      id
      name
    }
  }
`)

export default async function Page() {
  const data = await execute(ingredientsQuery)
  return (
    <div>
      <Heading tag="h2">Ingredients</Heading>
      <ul>
        {data?.ingredients.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
    </div>
  )
}
