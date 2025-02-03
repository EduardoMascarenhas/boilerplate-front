import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.REACT_APP_GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql', // this assumes that your GraphQL schema is available at the endpoint specified in the `REACT_APP_GRAPHQL_ENDPOINT` environment variable
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['src/graphql/*.graphql'],
  generates: {
    './src/generated/': {
      preset: 'client',
      plugins: ["typescript", "typescript-operations"],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;