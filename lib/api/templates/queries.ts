export const ListIngredients = /* GraphQL */ `
  query Ingredients {
    ingredients {
      id
      name
    }
  }
`

export const ListRecipes = /* GraphQL */ `
  query Recipes {
    recipes {
      id
      name
    }
  }
`

export const ListPantryItems = /* GraphQL */ `
  query PantryItems {
    pantryItems {
      id
      name
      quantity
      unit
    }
  }
`
