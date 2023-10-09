import algoliasearch from "algoliasearch";
import { getAllAlbums } from "./contentfulClient";

const searchClient = algoliasearch(
    "P6CCZN45ER",
    "cf814256b4cf855690036f02a8e267d0"
);

const index = searchClient.initIndex("albums");

const records = getAllAlbums();

index
    .saveObjects(records, { autoGenerateObjectIDIfNotExist: true })
    .catch((err) => console.error(err));

export { searchClient };
