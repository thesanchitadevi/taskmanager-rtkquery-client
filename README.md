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

## Caching in Redux

- What is Caching?

Caching in Redux (via RTK Query) refers to storing server data in the Redux store so that it can be reused without making redundant network requests.
It improves performance and reduces server load by retrieving data from the local cache instead of repeatedly fetching it from the server.

#### Key Terms in RTK Query Caching

1. `pollingInterval`
   Defines how frequently (in milliseconds) the data should be fetched from the server.
   Useful for keeping data up-to-date when frequent changes are expected on the server.

2. `refetchOnMountOrArgChange`
   Determines whether the data should be fetched again:
   When the component is mounted.
   When the argument passed to the query changes.

3. `refetchOnReconnect`
   Specifies whether to refetch data when the network reconnects after being offline.
