import algoliasearch from "algoliasearch/lite";
import {
    InstantSearch,
    SearchBox,
    Hits,
    Pagination,
    Configure,
} from "react-instantsearch";

const searchClient = algoliasearch(
    "P6CCZN45ER",
    "cf814256b4cf855690036f02a8e267d0"
);

function Hit({ hit }) {
    return (
        <article>
            <img src={hit.fields.imgUrl["en-US"]} />
            {/* <p>{hit.categories[0]}</p> */}
            <h1>{hit.fields.title["en-US"]}</h1>
            <p>${hit.fields.price["en-US"]}</p>
        </article>
    );
}
export default function SearchPage() {
    return (
        <>
            <InstantSearch searchClient={searchClient} indexName="albums">
                <Configure hitsPerPage={10} />
                <SearchBox />
                <Hits hitComponent={Hit} />
                <Pagination />
            </InstantSearch>
        </>
    );
}
