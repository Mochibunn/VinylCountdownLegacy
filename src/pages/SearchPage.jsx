import algoliasearch from "algoliasearch/lite";
import {
    InstantSearch,
    SearchBox,
    Hits,
    Pagination,
    Configure,
} from "react-instantsearch";
import { useNavigate } from "react-router-dom";

// import SearchCard from "../components/SearchCard";

import { Card, CardHeader, Image } from "@nextui-org/react";
const searchClient = algoliasearch(
    "P6CCZN45ER",
    "cf814256b4cf855690036f02a8e267d0"
);

export function SearchCard({ hit }) {
    const navigate = useNavigate();
    return (
        <Card
            className="w-4/5 mx-auto my-2"
            isPressable
            onClick={() => {
                navigate(`/album/${hit.objectID}`);
            }}
        >
            <CardHeader className="flex gap-3">
                <Image
                    alt="nextui logo"
                    height={80}
                    radius="sm"
                    src={hit.imgUrl}
                    width={80}
                />
                <div className="flex flex-col gap-3">
                    <p className="text-md">{hit.title}</p>
                    <p className="text-small text-default-500">
                        from: {hit.artist}
                    </p>
                    <p className="text-small text-default-500">${hit.price}</p>
                </div>
            </CardHeader>
        </Card>
    );
}

export default function SearchPage() {
    return (
        <>
            <InstantSearch searchClient={searchClient} indexName="albums">
                <Configure hitsPerPage={10} />
                <SearchBox />
                <Hits hitComponent={SearchCard} />
                <Pagination />
            </InstantSearch>
        </>
    );
}
