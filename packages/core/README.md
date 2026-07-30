# GraphQL Inspector

**GraphQL Inspector** outputs a list of changes between two GraphQL schemas. Every change is
precisely explained and marked as breaking, non-breaking or dangerous. It helps you validate
documents and fragments against a schema and even find similar or duplicated types.

## Features

Major features:

- **Compares schemas**
- **Finds breaking or dangerous changes**
- **Validates documents against a schema**
- **Finds similar / duplicated types**
- **Schema coverage based on documents**
- **Serves a GraphQL server with faked data and GraphQL Playground**

GraphQL Inspector has a **CLI** and also a **programmatic API**, so you can use it however you want
to and even build tools on top of it.

## Installation

```bash
npm install @graphql-inspector/core
```

## Examples

```typescript
import {
  diff,
  validate,
  similar,
  coverage,
  Change,
  InvalidDocument,
  SimilarMap,
  SchemaCoverage
} from '@graphql-inspector/core'

// diff
const changes: Change[] = diff(schemaA, schemaB)
// validate
const invalid: InvalidDocument[] = validate(documentsGlob, schema)
// similar
const similar: SimilarMap = similar(schema, typename, threshold)
// coverage
const schemaCoverage: SchemaCoverage = coverage(schema, documents)
// ...
```

## License

[MIT](LICENSE) © Kamil Kisiela © StepSecurity
