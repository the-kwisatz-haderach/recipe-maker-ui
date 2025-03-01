/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddIngredientInput = {
  name: Scalars['String']['input'];
};

export type AddPantryItemInput = {
  ingredientId: Scalars['ID']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type AddRecipeInput = {
  name: Scalars['String']['input'];
};

export type Ingredient = {
  __typename?: 'Ingredient';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addIngredient: Ingredient;
  addPantryItem: PantryItem;
  addRecipe: Recipe;
  updatePantryItem: PantryItem;
  updateRecipe: Recipe;
};


export type MutationAddIngredientArgs = {
  input: AddIngredientInput;
};


export type MutationAddPantryItemArgs = {
  input: AddPantryItemInput;
};


export type MutationAddRecipeArgs = {
  input: AddRecipeInput;
};


export type MutationUpdatePantryItemArgs = {
  input: UpdatePantryItemInput;
};


export type MutationUpdateRecipeArgs = {
  input: UpdateRecipeInput;
};

export type PantryItem = {
  __typename?: 'PantryItem';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  unit: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  ingredient: Ingredient;
  ingredients: Array<Ingredient>;
  pantryItem: PantryItem;
  pantryItems: Array<PantryItem>;
  recipe: Recipe;
  recipes: Array<Recipe>;
};


export type QueryIngredientArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPantryItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRecipeArgs = {
  id: Scalars['ID']['input'];
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type RecipeRole = {
  __typename?: 'RecipeRole';
  id: Scalars['ID']['output'];
  recipeId: Scalars['ID']['output'];
  relation: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type UpdatePantryItemInput = {
  id: Scalars['ID']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateRecipeInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type IngredientsQueryVariables = Exact<{ [key: string]: never; }>;


export type IngredientsQuery = { __typename?: 'Query', ingredients: Array<{ __typename?: 'Ingredient', id: string, name: string }> };

export type RecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipesQuery = { __typename?: 'Query', recipes: Array<{ __typename?: 'Recipe', id: string, name: string }> };

export type PantryItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type PantryItemsQuery = { __typename?: 'Query', pantryItems: Array<{ __typename?: 'PantryItem', id: string, name: string, quantity: number, unit: string }> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any> | undefined) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const IngredientsDocument = new TypedDocumentString(`
    query Ingredients {
  ingredients {
    id
    name
  }
}
    `) as unknown as TypedDocumentString<IngredientsQuery, IngredientsQueryVariables>;
export const RecipesDocument = new TypedDocumentString(`
    query Recipes {
  recipes {
    id
    name
  }
}
    `) as unknown as TypedDocumentString<RecipesQuery, RecipesQueryVariables>;
export const PantryItemsDocument = new TypedDocumentString(`
    query PantryItems {
  pantryItems {
    id
    name
    quantity
    unit
  }
}
    `) as unknown as TypedDocumentString<PantryItemsQuery, PantryItemsQueryVariables>;