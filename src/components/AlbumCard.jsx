import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Button,
    Image,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

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
    id,
}) {
    const navigate = useNavigate();
    return (
        <>
            <Card
                isPressable
                className="py-4"
                onClick={() => {
                    navigate(`/album/${id}`);
                }}
            >
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">{title}</h4>
                    <p className="text-tiny uppercase font-bold">Daily Mix</p>
                    <small className="text-default-500">12 Tracks</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={imgUrl}
                        width={270}
                    />
                </CardBody>
            </Card>
        </>
    );
}
