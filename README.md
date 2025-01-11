# React + TypeScript + Vite

```js
npm create vite@latest my-react-app --template
```

```js
npm install @reduxjs/toolkit react-redux
```

### Comparison: slice vs RTK Query

1. Main Purpose -

- slice => For local state management.
- RTK Query => For data fetching, caching, and server-state management.

2. Core API -

- slice => Built around createSlice to manage state and actions.
- RTK Query => Built around createApi to fetch and cache server-side data automatically.

3. Generated Hooks -

- slice => No built-in hooks. Use useSelector and useDispatch.
- RTK Query => Provides auto-generated hooks like useGetQuery.

### Query vs Mutation in baseApi

1. Purpose

#### Main Use

- Query => Fetch data from the server (Read operations).
- Mutation => Send data to the server (Create, Update, Delete operations).

#### State Changes

- Query => Automatically updates the store with fetched data.
- Mutation => Updates server data and allows you to update the client store as needed.

2. Key Differences

#### Operation Type

- Query => Read operations (e.g., GET requests).
- Mutation => Write operations (e.g., POST, PUT, DELETE).

#### Caching

- Query => Automatically caches data.
- Mutation => Does not cache by default; requires manual updates.
