import {
    InstantSearch,
    SearchBox,
    Hits,
    Pagination,
    Configure,
    CurrentRefinements,
    PoweredBy,
    // RefinementList,
} from "react-instantsearch";
import "instantsearch.css/themes/satellite.css";
import { useNavigate } from "react-router-dom";
import { searchClient } from "../lib/algoliaClient";
import CustomRefinementList from "../components/CustomRefinementList";

// import SearchCard from "../components/SearchCard";

import { Card, CardHeader, Image } from "@nextui-org/react";

export function SearchCard({ hit }) {
    const navigate = useNavigate();
    return (
        <Card
            className="w-full mx-auto my-2"
            isPressable
            onClick={() => {
                navigate(`/album/${hit.objectID}`);
            }}
        >
            <CardHeader className="flex gap-3">
                <Image
                    alt="nextui logo"
                    height={100}
                    radius="sm"
                    src={hit.imgUrl}
                    width={100}
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
        <div className="p-6">
            <InstantSearch searchClient={searchClient} indexName="albums">
                <Configure hitsPerPage={10} />
                <Card
                    isFooterBlurred
                    className="w-full h-[20dvh] col-span-12 sm:col-span-7 relative"
                >
                    <CardHeader className="absolute inset-0 flex justify-center">
                        <SearchBox
                            placeholder="Search..."
                            classNames={{
                                root: "w-11/12",
                                // form: "bg-default-400/20 dark:bg-slate-800 rounded-full",
                                input: "font-normal text-default-500 bg-default-400/20 dark:bg-stone-900",
                            }}
                        />
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="vinyl record player"
                        className="z-0 w-full h-full object-cover"
                        src="src/assets/vinylbg.jpg"
                    />
                </Card>

                <PoweredBy />
                <CurrentRefinements
                    includedAttributes={["format", "genre", "price", "sleeve"]}
                    classNames={{
                        root: "mt-2 mb-4",
                        item: "bg-white dark:bg-stone-800",
                    }}
                />
                <div className="flex ml-3 w-full">
                    <div className="flex-col gap-4">
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold">Genre</h4>
                            <CustomRefinementList
                                attribute="genre"
                                showMore={true}
                            />
                        </div>
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold"> Format</h4>
                            <CustomRefinementList
                                attribute="format"
                                showMore={true}
                            />
                        </div>
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold">Price</h4>
                            <CustomRefinementList attribute="price" />
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold">Sleeve</h4>
                            <CustomRefinementList attribute="sleeve" />
                        </div>
                    </div>
                    <Hits
                        hitComponent={SearchCard}
                        classNames={{
                            root: "w-3/4",
                            item: "bg-white dark:bg-stone-900",
                        }}
                    />
                </div>
                <Pagination
                    classNames={{
                        root: "flex justify-center mt-4",
                        pageItem: "dark:bg-stone-900",
                    }}
                />
            </InstantSearch>
        </div>
    );
}
