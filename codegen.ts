import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/gql/reactivevar/schema.graphql",
  documents: "src/**/*.graphql",
  generates: {
    "src/gql/generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
