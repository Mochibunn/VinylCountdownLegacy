import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { Card, CardBody, Image, Divider, Textarea, Button } from "@nextui-org/react";
import AlbumCarousel from "../components/AlbumCarousel";
import { Spotify } from "react-spotify-embed";

const client = createClient({
    space: "mzz74ba5zfwb",
    accessToken: "qip5rmOLyuFNm33Av0mWcV9volA1KAwFjfQvK4hmHdA",
});

export default function AlbumPage() {
    const [singleAlbum, setSingleAlbum] = useState();
    const { albumId } = useParams();

    useEffect(() => {
        const getSingleAlbum = async () => {
            try {
                const getEntry = await client.getEntry(albumId);
                // console.log(getEntry.fields);
                return getEntry.fields;
            } catch (error) {
                console.error(error.message);
            }
        };
        getSingleAlbum()
            .then((albumData) => setSingleAlbum(albumData))
            .catch((error) => console.error(error));
    }, [albumId]);

    return (
        <>
            {singleAlbum && (
                <div className="m-5 sm:m-10 md:m-[5em] flex flex-col sm:flex-row">
                    <Card
                        shadow="sm"
                        isPressable
                        onPress={() => console.log("item pressed")}
                        className="mb-8 h-full"
                        >
                        <CardBody className=" p-0">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={singleAlbum.title}
                                className="sm:max-h-[250px] md:max-h-[300px] lg:max-h-[450px] xl:max-h-[600px]"
                                src={singleAlbum.imgUrl}
                                />
                        </CardBody>
                        {/* <CardFooter className="text-small justify-between">
                            <b>{singleAlbum.title}</b>
                            <p className="text-default-500">{singleAlbum.price}</p>
                        </CardFooter> */}
                    </Card>
                    <div className="sm:ml-5 md:ml-8 lg:ml-10 sm:mt-12 w-1/2">
                        <span className="text-3xl md:text-4xl lg:text-5xl font-bold">{singleAlbum.title}</span>
                        <h2 className="text-3xl sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">{singleAlbum.artist}</h2>
                        <Divider className="my-4 sm:my-2" />
                        <h1 className="text-4xl lg:text-6xl font-bold">${singleAlbum.price}</h1>
                        <Divider className="my-2" />
                        <h2 className="lg:text-3xl text-xl">Sleeve: <b className="font-semibold">{singleAlbum.sleeve}</b></h2>
                        <h2 className="lg:text-3xl text-xl">Media: <b className="font-semibold">{singleAlbum.media}</b></h2>
                        
                        <div className="w-full max-w-full sm:max-w-xs md:max-w-md">
                            <Textarea
                                isReadOnly
                                label="Additional notes"
                                variant="bordered"
                                labelPlacement="inside"
                                // placeholder="Additional notes"
                                defaultValue={singleAlbum.comment}
                                className="mt-3"
                            />
                            <div className="mt-4 flex gap-4 justify-center ">
                                <Button color="primary" variant="ghost" endContent="" className="w-full">
                                Add to cart
                                </Button>    
                                <Button color="primary" variant="ghost" startContent="" className="w-full">
                                Add to list
                                </Button>
                            </div>
                            <Divider className="my-4"/>
                            <Spotify link={singleAlbum.spotifyUrl} className="w-full"/>
                        </div>
                    </div>
                </div>
            )}
            <AlbumCarousel />
        </>
    );
}
