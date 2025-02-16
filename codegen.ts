import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://raw.githubusercontent.com/the-kwisatz-haderach/recipe-maker/refs/heads/main/graph/schema.graphqls',
  documents: [
    'lib/api/templates/operations.ts',
    'lib/api/templates/queries.ts',
    'lib/api/templates/mutations.ts',
  ],
  ignoreNoDocuments: true,
  generates: {
    'lib/api/graphql/': {
      preset: 'client',
      plugins: [],
      config: {
        documentMode: 'string',
      },
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
  },
}

export default config
