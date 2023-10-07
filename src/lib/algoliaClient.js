import algoliasearch from "algoliasearch";
import { getAllAlbums } from "./contentfulClient";

const client = algoliasearch("P6CCZN45ER", "cf814256b4cf855690036f02a8e267d0");

const index = client.initIndex("albums");

const records = getAllAlbums();

index
    .saveObjects(records, { autoGenerateObjectIDIfNotExist: true })
    .catch((err) => console.error(err));
