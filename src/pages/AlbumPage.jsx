import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../Contexts";
import { FiPlus, FiShoppingCart } from "react-icons/fi";
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
import { addToWishlist } from "../lib/contentfulMngClient";
import Tilt from "react-parallax-tilt";
import RemoveWishBtn from "../components/RemoveWishBtn";

export default function AlbumPage() {
    const [inWishlist, setInWishlist] = useState(false);
    const [singleAlbum, setSingleAlbum] = useState();
    const { albumId } = useParams();
    const { user, setUser } = useContext(UserContext);

    // console.log(singleAlbum);
    // console.log(user[0]);

    const handleAddToWishlist = () => {
        if (!user) return;
        const updatedWishlist = [
            ...(user[0].fields.wishlist || []),
            singleAlbum,
        ];
        addToWishlist(user[0].sys.id, albumId);
        setUser((prev) =>
            prev.map((user) => ({
                ...user,
                fields: { ...user.fields, wishlist: updatedWishlist },
            }))
        );
        // setInWishlist(true);
    };
    singleAlbum && console.log(singleAlbum.sys.id);
    useEffect(() => {
        //imported now :)
        getSingleAlbum(albumId)
            .then((albumData) => setSingleAlbum(albumData))
            .catch((error) => console.error(error));
    }, [albumId]);

    //check if album is in wishlist, and update state
    useEffect(() => {
        if (!user || !user[0].fields.wishlist) return;
        const testArray = user[0].fields.wishlist.filter(
            (album) => album.sys.id === albumId
        );
        console.log("testarray", testArray);
        const wishlistStatus = testArray.length;
        console.log("wishliststatus", wishlistStatus);
        setInWishlist(wishlistStatus);
    }, [user, albumId]);

    return (
        <>
            {singleAlbum && (
                <div className="m-5 sm:m-10 md:m-[5em] flex flex-col sm:flex-row justify-center w-100">
                    <Card
                        shadow="sm"
                        isPressable
                        disableRipple
                        onPress={() => console.log("item pressed")}
                        className="mb-8 h-full sm:sticky sm:top-20 overflow-visible shadow-none bg-transparent"
                    >
                        <Tilt
                            glareEnable
                            transitionSpeed={1000}
                            glareBorderRadius="12px"
                            glarePosition="top"
                            glareMaxOpacity={0.1}
                            glareReverse
                            className="rounded-xl overflow-hidden"
                        >
                            <div>
                                <CardBody className="p-0 shadow-2xl rounded-xl">
                                    <Image
                                        shadow="sm"
                                        radius="lg"
                                        width="100%"
                                        alt={singleAlbum.fields.title}
                                        className="sm:max-h-[250px] md:max-h-[300px] lg:max-h-[450px] xl:max-h-[600px] rounded-xl -z-1"
                                        src={singleAlbum.fields.imgUrl}
                                    />
                                </CardBody>
                            </div>
                        </Tilt>
                    </Card>
                    <div className="sm:ml-5 md:ml-8 lg:ml-12 sm:mt-12 w-full sm:w-1/2">
                        <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            {singleAlbum.fields.title}
                        </span>
                        <h2 className="text-3xl sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                            {singleAlbum.fields.artist}
                        </h2>
                        <h2 className="text-xl font-semibold mt-1 mb-2">
                            {singleAlbum.fields.year}
                        </h2>
                        <h2 className="text-l">
                            <i className="font-normal">
                                {singleAlbum.fields.format}
                            </i>
                        </h2>
                        <h2 className="text-xl">
                            Sleeve:{" "}
                            <b className="font-semibold">
                                {singleAlbum.fields.sleeve}
                            </b>
                        </h2>
                        <h2 className="text-xl">
                            Media:{" "}
                            <b className="font-semibold">
                                {singleAlbum.fields.media}
                            </b>
                        </h2>
                        <Divider className="my-4 sm:my-2" />
                        <h1 className="text-4xl lg:text-6xl font-bold">
                            ${singleAlbum.fields.price}
                        </h1>
                        <Divider className="my-2" />

                        <div className="w-full max-w-full sm:max-w-xs md:max-w-full">
                            <Textarea
                                isReadOnly
                                label="Additional notes"
                                variant="bordered"
                                labelPlacement="inside"
                                // placeholder="Additional notes"
                                defaultValue={singleAlbum.fields.comment}
                                className="mt-3"
                            />
                            <div className="mt-4 flex gap-4 justify-center">
                                <Button
                                    color="warning"
                                    variant="shadow"
                                    endContent={<FiShoppingCart />}
                                    className="w-full h-14 text-lg font-semibold active:bg-default-400 active:shadow-default-300 active:text-white "
                                >
                                    Add to cart
                                </Button>
                                {inWishlist ? (
                                    <RemoveWishBtn
                                        id={singleAlbum.sys.id}
                                        setInWishlist={setInWishlist}
                                    />
                                ) : (
                                    <Button
                                        color="warning"
                                        variant="shadow"
                                        startContent={<FiPlus />}
                                        className="w-full h-14 text-lg font-semibold"
                                        onClick={handleAddToWishlist}
                                    >
                                        Add to Wishlist
                                    </Button>
                                )}
                            </div>
                            <Divider className="my-4" />
                            <div
                                className="rounded-xl overflow-hidden"
                                aria-label="component wrapper"
                            >
                                {" "}
                                {/* w/o this div, the Spotify player gets ugly white corners in dark mode */}
                                <Spotify
                                    link={singleAlbum.fields.spotifyUrl}
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
