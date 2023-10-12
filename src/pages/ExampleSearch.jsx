// import algoliasearch from "algoliasearch/lite";
import { searchClient } from "../lib/algoliaClient";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch";

// const searchClient = algoliasearch(
//     "P6CCZN45ER",
//     "2898de2d55fa2c00548325a227850dde"
// );

function Hit({ hit }) {
    console.log(hit.fields);
    return (
        <article>
            <p>{hit.fields.firstName["en-US"]}</p>
        </article>
    );
}

export default function ExampleSearch() {
    return (
        <div className="h-screen">
            <InstantSearch searchClient={searchClient} indexName="users">
                <SearchBox />
                <Hits hitComponent={Hit} />
            </InstantSearch>
        </div>
    );
}
