import { createRandom, tags } from 'typia'
import { Ingredient, PantryItem, Recipe } from '../graphql/graphql'

type Name = string & tags.MaxLength<16> & tags.MinLength<4>

export const createRecipe = createRandom<
  Recipe & {
    name: Name
  }
>()

export const createIngredient = createRandom<
  Ingredient & {
    name: Name
  }
>()

export const createPantryItem = createRandom<
  PantryItem & {
    name: Name
  }
>()
