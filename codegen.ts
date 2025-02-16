import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  // schema: 'lib/api/gql/schema.gql',
  schema: '../recipe-maker/graph/schema.graphqls',
  documents: 'lib/api/operations.ts',
  generates: {
    'lib/api/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
