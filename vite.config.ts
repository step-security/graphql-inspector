import { join } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

<<<<<<< 2d20012e10931438d69b7eaf3d57edf70fd2e4b1
export default defineConfig({
  test: {
    globals: true,
    alias: {
      '@graphql-inspector/core': 'packages/core/src/index.ts',
      '@graphql-inspector/config': 'packages/config/src/index.ts',
      '@graphql-inspector/loaders': 'packages/loaders/loaders/src/index.ts',
      'graphql/language/parser.js': 'graphql/language/parser.js',
      graphql: 'graphql/index.js',
=======
export default defineConfig(({ mode }) => {
  const usesLegacyGraphQL = /^graphql-(?:14|15|16)$/.test(mode);
  const graphqlPackage = usesLegacyGraphQL ? mode : 'graphql';

  return {
    resolve: {
      alias: [
        {
          find: /^graphql$/,
          replacement: join(__dirname, `node_modules/${graphqlPackage}/index.mjs`),
        },
        ...(usesLegacyGraphQL
          ? [
              {
                find: /^graphql\/(.*)$/,
                replacement: join(__dirname, `node_modules/${graphqlPackage}/$1`),
              },
            ]
          : []),
      ],
>>>>>>> 676df8fff6742bbc6d74eae4a892463fad594b4f
    },
    test: {
      globals: true,
      setupFiles: ['./packages/testing/src/setup-file.ts'],
      ...(usesLegacyGraphQL
        ? {
            server: {
              deps: {
                inline: true,
              },
            },
          }
        : {}),
    },
<<<<<<< 2d20012e10931438d69b7eaf3d57edf70fd2e4b1
  },
  plugins: [
    tsconfigPaths({
      projects: [join(__dirname, 'tsconfig.test.json')],
    }),
  ],
=======
    plugins: [
      tsconfigPaths({
        projects: [join(__dirname, 'tsconfig.build.json'), join(__dirname, 'tsconfig.test.json')],
      }),
    ],
  };
>>>>>>> 676df8fff6742bbc6d74eae4a892463fad594b4f
});
