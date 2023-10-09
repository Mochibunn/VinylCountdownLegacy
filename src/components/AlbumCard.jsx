import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Button,
    Image, Divider
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
                className="py-0 mx-3"
                onClick={() => {
                    navigate(`/album/${id}`);
                }}
            >
                <CardHeader className="p-0">
                <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={imgUrl}
                        width="100%"
                        height="100%"
                    />
                </CardHeader>
                <CardBody className="pb-0 pt-2 px-4">
                    <div className="flex mb-3">
                        <div className="w-4/5">
                            <h4 className="font-bold text-large truncate">{title}</h4>
                            <p className="text-tiny uppercase font-bold truncate">{artist}</p>
                            <small className="text-default-500 truncate">{format}</small>
                        </div>
                        <h4 className="font-bold text-large truncate w-1/5 flex justify-center items-end ">${price}</h4>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}
