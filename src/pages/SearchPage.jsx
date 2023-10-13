import {
    InstantSearch,
    SearchBox,
    Hits,
    Configure,
    CurrentRefinements,
    PoweredBy,
    // RefinementList,
} from "react-instantsearch";
import "instantsearch.css/themes/satellite.css";
import { useNavigate } from "react-router-dom";
import { searchClient } from "../lib/algoliaClient";
import CustomRefinementList from "../components/CustomRefinementList";
import {
    Button,
    Card,
    CardHeader,
    Image,
    Accordion,
    AccordionItem,
} from "@nextui-org/react";
import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { GenreMap } from "../components/GenreMap";
import CustomPagination from "../components/CustomPagination";

export function SearchCard({ hit }) {
    const navigate = useNavigate();
    return (
        <Card
            className="w-full h-full my-0"
            isPressable
            onClick={() => {
                navigate(`/album/${hit.objectID}`);
            }}
        >
            <CardHeader className="flex p-0">
                <Image
                    alt={`${hit.title} album front cover`}
                    height="100%"
                    radius="sm"
                    src={hit.imgUrl}
                    width="100%"
                    className="h-[100px] w-[100px] sm:h-[100px] sm:w-[100px] md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px] m-2 md:m-0"
                />
                <div className="flex text-left flex-col ml-3 w-8/12 overflow-clip gap-0 lg:gap-3">
                    <p className="text-base md:text-2xl font-bold truncate">
                        {hit.title}
                    </p>
                    <p className="text-xs md:text-lg font-semibold text-default-500 truncate">
                        By: {hit.artist}
                    </p>
                    <p className="text-xs italic">{hit.format}</p>
                    {/* {console.log(hit.genre)} */}
                    <div className="flex">
                        <span>{GenreMap(hit.genre)}</span>
                    </div>
                    <p className="text-base md:text-xl font-semibold">
                        ${hit.price}
                    </p>
                </div>
            </CardHeader>
        </Card>
    );
}

export default function SearchPage({ searchValue }) {
    const [hits, setHits] = useState(10);
    setHits; //Purely so that VS Code shuts up about the function never getting called
    const [pressed, setPressed] = useState(false);

    const handlePress = () => {
        setPressed(!pressed);
    };
    // useEffect(() => {
    // 	console.log(`Is it looping?`);
    // 	setPressed(!pressed)
    // }, [pressed])

    return (
        <div className="">
            <InstantSearch
                searchClient={searchClient}
                indexName="albums"
                classNames={{
                    root: "",
                }}
                initialUiState={{
                    albums: {
                        query: searchValue,
                    },
                }}
            >
                <Configure hitsPerPage={hits} />
                <Card
                    isFooterBlurred
                    className="w-full h-[20vh] col-span-12 sm:col-span-7 relative"
                >
                    <CardHeader className="absolute inset-0 flex justify-center">
                        <SearchBox
                            placeholder="Search.."
                            classNames={{
                                root: "w-11/12",
                                // form  : "bg-default-400/20 dark:bg-slate-800 rounded-full",
                                input: "font-normal text-default-500 dark:text-white bg-default-400/20 dark:bg-stone-900",
                            }}
                        />
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="vinyl record player"
                        className="z-0 w-full h-full object-cover"
                        src="https://cdn.discordapp.com/attachments/199274450011553792/1162324637288517674/vinylbg.jpg"
                    />
                </Card>
                <PoweredBy className="text-[8pt]" />

                <CurrentRefinements
                    includedAttributes={["format", "genre", "price", "sleeve"]}
                    classNames={{
                        root: "mt-2 mb-4",
                        item: "bg-white dark:bg-stone-800",
                    }}
                />
                {/* Mobile view filter drawer, for larger screens please scroll down */}
                <Button
                    className="md:hidden mb-0 ml-3"
                    onPress={handlePress}
                    color="primary"
                    startContent={<FiFilter />}
                >
                    Filters
                </Button>

                <Accordion
                    selectedKeys={pressed ? "1" : "0"}
                    keepContentMounted
                    hideIndicator
                    className="px-3 overflow-visible md:hidden"
                >
                    <AccordionItem
                        key="1"
                        className="overflow-visible"
                        textValue="Filters"
                    >
                        <Accordion
                            isCompact
                            variant="bordered"
                            keepContentMounted
                            className="overflow-visible"
                        >
                            <AccordionItem
                                className="text-xl font-semibold overflow-visible"
                                title="Genre"
                            >
                                <CustomRefinementList
                                    attribute="genre"
                                    showMore={true}
                                />
                            </AccordionItem>
                            <AccordionItem
                                className="text-xl font-semibold"
                                title="Format"
                            >
                                <CustomRefinementList
                                    attribute="format"
                                    showMore={true}
                                />
                            </AccordionItem>
                            <AccordionItem
                                className="text-xl font-semibold"
                                title="Price"
                            >
                                <CustomRefinementList attribute="price" />
                            </AccordionItem>
                            <AccordionItem
                                className="text-xl font-semibold"
                                title="Sleeve"
                            >
                                <CustomRefinementList attribute="sleeve" />
                            </AccordionItem>
                        </Accordion>
                    </AccordionItem>
                </Accordion>
                {/* Wider screen filters */}
                <div className="flex flex-col md:flex-row justify-evenly">
                    <div className="hidden md:block md:flex-row lg:flex-col w-full md:w-1/5 mr-2 pl-4">
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
                    <Card className="bg-white dark:bg-stone-900 rounded-2xl overflow-hidden w-full md:w-4/5 mr-0 md:mr-10">
                        <Hits
                            hitComponent={SearchCard}
                            classNames={{
                                // root: "w-full md:w-4/5 pr-0 md:pr-10",
                                item: "w-full light:bg-transparent dark:bg-transparent",
                            }}
                        />
                    </Card>
                </div>
                {/* <Pagination
                    classNames={{
                        root: "flex justify-center mt-4 w-11/12",
                        pageItem: "bg-black text-foreground",
                    }}
                    /> */}
                <CustomPagination />
            </InstantSearch>
        </div>
    );
}
