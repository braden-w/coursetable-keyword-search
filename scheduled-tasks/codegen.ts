import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'graphql.schema.json',
	documents: ['./graphql/**/*.gql', './**/*.ts'],
	generates: {
		'./graphql/generated.ts': {
			plugins: ['typescript', 'typescript-operations']
		}
	}
};
export default config;
