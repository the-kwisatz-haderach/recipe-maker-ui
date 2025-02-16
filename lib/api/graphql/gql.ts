/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Ingredients {\n    ingredients {\n      id\n      name\n    }\n  }\n": types.IngredientsDocument,
    "\n  query Recipes {\n    recipes {\n      id\n      name\n    }\n  }\n": types.RecipesDocument,
    "\n  query PantryItems {\n    pantryItems {\n      id\n      name\n      quantity\n      unit\n    }\n  }\n": types.PantryItemsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Ingredients {\n    ingredients {\n      id\n      name\n    }\n  }\n"): typeof import('./graphql').IngredientsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Recipes {\n    recipes {\n      id\n      name\n    }\n  }\n"): typeof import('./graphql').RecipesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PantryItems {\n    pantryItems {\n      id\n      name\n      quantity\n      unit\n    }\n  }\n"): typeof import('./graphql').PantryItemsDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
