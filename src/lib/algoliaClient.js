import algoliasearch from "algoliasearch";
import { getAllAlbums } from "./contentfulClient";

const searchClient = algoliasearch(
    import.meta.env.VITE_ALGOLIA_SPACE_ID,
    import.meta.env.VITE_ALGOLIA_API_KEY
);

const index = searchClient.initIndex("albums");

const records = getAllAlbums();

index
    .saveObjects(records, { autoGenerateObjectIDIfNotExist: true })
    .catch((err) => console.error(err));

export { searchClient };
