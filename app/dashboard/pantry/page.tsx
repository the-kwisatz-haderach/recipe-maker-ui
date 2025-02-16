import React from 'react'
import { graphql } from '@/lib/api/graphql'
import { execute } from '@/lib/api/graphql/execute'
import Heading from '@/components/Heading/Heading'

const pantryItemsQuery = graphql(`
  query PantryItems {
    pantryItems {
      id
      name
      quantity
      unit
    }
  }
`)

export default async function Page() {
  const data = await execute(pantryItemsQuery)
  return (
    <div>
      <Heading tag="h2">Pantry</Heading>
      <ul>
        {data?.pantryItems.map((item) => (
          <li key={item.id}>
            <article>
              <h1>{item.name}</h1>
              <span>
                {item.quantity} {item.unit}
              </span>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
