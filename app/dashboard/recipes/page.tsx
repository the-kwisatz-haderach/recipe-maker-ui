import React from 'react'
import { graphql } from '@/lib/api/graphql'
import { execute } from '@/lib/api/graphql/execute'
import Heading from '@/components/Heading/Heading'

const recipesQuery = graphql(`
  query Recipes {
    recipes {
      id
      name
    }
  }
`)

export default async function Page() {
  const data = await execute(recipesQuery)
  return (
    <div>
      <Heading tag="h2">Recipes</Heading>
      <ul>
        {data?.recipes.map((recipe) => <li key={recipe.id}>{recipe.name}</li>)}
      </ul>
    </div>
  )
}
