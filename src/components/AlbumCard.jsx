import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function AlbumCard({
    artist,
    format,
    imgUrl,
    media,
    price,
    sleeve,
    spotifyUrl,
    title,
    year,
}) {
    return (
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
                    alt={title}
                    className="w-full object-cover h-[140px]"
                    src={imgUrl}
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <b>{title}</b>
                <p className="text-default-500">{price}</p>
            </CardFooter>
        </Card>
    );
}
