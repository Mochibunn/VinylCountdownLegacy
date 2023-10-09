import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import {
    Card,
    CardBody,
    Image,
    Divider,
    Textarea,
    Button,
} from "@nextui-org/react";
import AlbumCarousel from "../components/AlbumCarousel";
import { Spotify } from "react-spotify-embed";
import { getSingleAlbum } from "../lib/contentfulClient";
// import { UserContext } from "../Contexts";
import Tilt from "react-parallax-tilt";

export default function AlbumPage() {
    const [singleAlbum, setSingleAlbum] = useState();
    const { albumId } = useParams();
    // const { user } = useContext(UserContext);
    // const myWishlist = user[0].fields.wishlist;
    // console.log(myWishlist);

    useEffect(() => {
        //imported now :)
        getSingleAlbum(albumId)
            .then((albumData) => setSingleAlbum(albumData))
            .catch((error) => console.error(error));
    }, [albumId]);

    return (
        <>
            {singleAlbum && (
                <div className="m-5 sm:m-10 md:m-[5em] flex flex-col sm:flex-row justify-center w-100">
                    <Card
                        shadow="sm"
                        isPressable
                        onPress={() => console.log("item pressed")}
                        className="mb-8 h-full sm:sticky sm:top-20 overflow-visible shadow-none bg-transparent"
                    >
                        <Tilt className="rounded-xl overflow-hidden">
                            <div>
                                <CardBody className="p-0 shadow-2xl bg-none rounded-xl">
                                    <Image
                                        shadow="sm"
                                        radius="lg"
                                        width="100%"
                                        alt={singleAlbum.title}
                                        className="sm:max-h-[250px] md:max-h-[300px] lg:max-h-[450px] xl:max-h-[600px] rounded-xl"
                                        src={singleAlbum.imgUrl}
                                    />
                                </CardBody>
                            </div>
                        </Tilt>
                    </Card>
                    <div className="sm:ml-5 md:ml-8 lg:ml-12 sm:mt-12 w-full sm:w-1/2">
                        <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            {singleAlbum.title}
                        </span>
                        <h2 className="text-3xl sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                            {singleAlbum.artist}
                        </h2>
                        <h2 className="text-xl font-semibold mt-1 mb-2">
                            {singleAlbum.year}
                        </h2>
                        <h2 className="text-l">
                            <i className="font-normal">{singleAlbum.format}</i>
                        </h2>
                        <h2 className="text-xl">
                            Sleeve:{" "}
                            <b className="font-semibold">
                                {singleAlbum.sleeve}
                            </b>
                        </h2>
                        <h2 className="text-xl">
                            Media:{" "}
                            <b className="font-semibold">{singleAlbum.media}</b>
                        </h2>
                        <Divider className="my-4 sm:my-2" />
                        <h1 className="text-4xl lg:text-6xl font-bold">
                            ${singleAlbum.price}
                        </h1>
                        <Divider className="my-2" />

                        <div className="w-full max-w-full sm:max-w-xs md:max-w-full">
                            <Textarea
                                isReadOnly
                                label="Additional notes"
                                variant="bordered"
                                labelPlacement="inside"
                                // placeholder="Additional notes"
                                defaultValue={singleAlbum.comment}
                                className="mt-3"
                            />
                            <div className="mt-4 flex gap-4 justify-center">
                                <Button
                                    color="primary"
                                    variant="ghost"
                                    endContent=""
                                    className="w-full"
                                >
                                    Add to cart
                                </Button>
                                <Button
                                    color="primary"
                                    variant="ghost"
                                    startContent=""
                                    className="w-full"
                                >
                                    Add to Wishlist
                                </Button>
                            </div>
                            <Divider className="my-4" />
                            <div className="rounded-xl overflow-hidden" aria-label="component wrapper"> {/* w/o this div, the Spotify player gets ugly white corners in dark mode */}
                            <Spotify
                                link={singleAlbum.spotifyUrl}
                                className="w-full h-[600px] shadow-2xl"
                                />
                                </div>
                        </div>
                    </div>
                </div>
            )}
            <AlbumCarousel />
        </>
    );
}
