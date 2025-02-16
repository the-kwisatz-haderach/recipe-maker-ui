import { HttpResponse, graphql, http } from 'msw'
import { cookies as getCookies } from 'next/headers'
import { IngredientsQuery, PantryItemsQuery } from '@/lib/api/generated/graphql'
import {
  createIngredient,
  createPantryItem,
  createRecipe,
} from '@/lib/api/generated/mockData'
import { createRandomNumberGenerator } from '@/lib/utils/createRandomNumberGenerator'

const generateNumber = createRandomNumberGenerator(1, 10)

export const handlers = [
  http.post('*/login', async () => {
    const cookies = await getCookies()
    cookies.set('session-cookie', 'somecookie', { path: '/' })
    return new HttpResponse('success', {
      headers: {
        'Set-Cookie': cookies.toString(),
      },
    })
  }),
  graphql.query('Recipes', () => {
    const recipes = Array.from({
      length: generateNumber(),
    }).map(() => createRecipe())

    return HttpResponse.json({
      data: {
        recipes,
      },
    })
  }),
  graphql.query<IngredientsQuery>('Ingredients', () => {
    const ingredients = Array.from({
      length: generateNumber(),
    }).map(() => createIngredient())

    return HttpResponse.json({
      data: {
        ingredients,
      },
    })
  }),
  graphql.query<PantryItemsQuery>('PantryItems', () => {
    const pantryItems = Array.from({
      length: generateNumber(),
    }).map(() => createPantryItem())

    return HttpResponse.json({
      data: {
        pantryItems,
      },
    })
  }),
]
