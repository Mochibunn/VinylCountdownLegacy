import algoliasearch from "algoliasearch/lite";
import {
    InstantSearch,
    SearchBox,
    Hits,
    Pagination,
    Configure,
} from "react-instantsearch";

import SearchCard from "../components/SearchCard";

const searchClient = algoliasearch(
    "P6CCZN45ER",
    "cf814256b4cf855690036f02a8e267d0"
);

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Link,
    Image,
} from "@nextui-org/react";

export function SearchCard() {
    return (
        <Card className="max-w-[400px]">
            <CardBody>
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md">NextUI</p>
                    <p className="text-small text-default-500">nextui.org</p>
                </div>
            </CardBody>
        </Card>
    );
}

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
