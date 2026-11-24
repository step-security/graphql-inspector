import { join } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    alias: {
      '@graphql-inspector/core': 'packages/core/src/index.ts',
      '@graphql-inspector/config': 'packages/config/src/index.ts',
      '@graphql-inspector/loaders': 'packages/loaders/loaders/src/index.ts',
      'graphql/language/parser.js': 'graphql/language/parser.js',
      graphql: 'graphql/index.js',
    },
    deps: {
      // fixes `graphql` Duplicate "graphql" modules cannot be used at the same time since different
      fallbackCJS: true,
    },
  },
  plugins: [
    tsconfigPaths({
      projects: [join(__dirname, 'tsconfig.test.json')],
    }),
  ],
});
