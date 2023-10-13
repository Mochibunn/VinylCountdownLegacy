import algoliasearch from "algoliasearch";

const searchClient = algoliasearch(
    import.meta.env.VITE_ALGOLIA_SPACE_ID,
    import.meta.env.VITE_ALGOLIA_API_KEY
);

export { searchClient };
