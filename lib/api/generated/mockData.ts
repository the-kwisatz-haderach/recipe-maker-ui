import * as __typia_transform__randomPick from "typia/lib/internal/_randomPick.js";
import * as __typia_transform__randomString from "typia/lib/internal/_randomString.js";
import * as __typia_transform__randomNumber from "typia/lib/internal/_randomNumber.js";
import { createRandom, tags } from 'typia';
import { Ingredient, PantryItem, Recipe } from "../graphql/graphql";
type Name = string & tags.MaxLength<16> & tags.MinLength<4>;
export const createRecipe = (() => { const _ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
    __typename: __typia_transform__randomPick._randomPick([
        () => undefined,
        () => "Recipe"
    ])(),
    id: (_generator?.string ?? __typia_transform__randomString._randomString)({
        type: "string"
    }),
    name: (_generator?.string ?? __typia_transform__randomString._randomString)({
        type: "string",
        maxLength: 16,
        minLength: 4
    })
}); let _generator: Partial<import("typia").IRandomGenerator> | undefined; return (generator?: Partial<import("typia").IRandomGenerator>): import("typia").Resolved<Recipe & {
    name: Name
  }> => {
    _generator = generator;
    return _ro0();
}; })();
export const createIngredient = (() => { const _ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
    __typename: __typia_transform__randomPick._randomPick([
        () => undefined,
        () => "Ingredient"
    ])(),
    id: (_generator?.string ?? __typia_transform__randomString._randomString)({
        type: "string"
    }),
    name: (_generator?.string ?? __typia_transform__randomString._randomString)({
        type: "string",
        maxLength: 16,
        minLength: 4
    })
}); let _generator: Partial<import("typia").IRandomGenerator> | undefined; return (generator?: Partial<import("typia").IRandomGenerator>): import("typia").Resolved<Ingredient & {
    name: Name
  }> => {
    _generator = generator;
    return _ro0();
}; })();
export const createPantryItem = (() => { const _ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
    __typename: __typia_transform__randomPick._randomPick([
        () => undefined,
        () => "PantryItem"
    ])(),
    id: (_generator?.string ?? __typia_transform__randomString._randomString)({
        type: "string"
    }),
    name: (_generator?.string ?? __typia_transform__randomString._randomString)({
        type: "string",
        maxLength: 16,
        minLength: 4
    }),
    quantity: (_generator?.number ?? __typia_transform__randomNumber._randomNumber)({
        type: "number"
    }),
    unit: (_generator?.string ?? __typia_transform__randomString._randomString)({
        type: "string"
    })
}); let _generator: Partial<import("typia").IRandomGenerator> | undefined; return (generator?: Partial<import("typia").IRandomGenerator>): import("typia").Resolved<PantryItem & {
    name: Name
  }> => {
    _generator = generator;
    return _ro0();
}; })();
