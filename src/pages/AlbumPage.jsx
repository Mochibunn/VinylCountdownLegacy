import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

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
                <Card
                    shadow="sm"
                    isPressable
                    onPress={() => console.log("item pressed")}
                >
                    <CardBody className="overflow-visible p-0">
                        <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt={singleAlbum.title}
                            className="w-full object-cover h-[140px]"
                            src={singleAlbum.imgUrl}
                        />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                        <b>{singleAlbum.title}</b>
                        <p className="text-default-500">{singleAlbum.price}</p>
                    </CardFooter>
                </Card>
            )}
        </>
    );
}
