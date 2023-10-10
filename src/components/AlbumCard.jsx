import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Button,
    Image, Divider
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";


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
                className="py-0 mx-3 sm:mx-0 md:mx-1 lg:mx-3"
                onClick={() => {
                    navigate(`/album/${id}`);
                }}
            >
                <CardHeader className="p-0">
                <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src={imgUrl}
                        // width="100%"
                        // height="100%"
                    />
                </CardHeader>
                <CardBody className="pb-0 pt-3 px-4 sm:px-2 lg:px-4">
                    <div className="flex whitespace-nowrap mb-3">
                        <div className="w-full truncate">
                            <h4 className="font-bold text-large sm:text-sm md:text-xl lg:text-l truncate">{title}</h4>
                            <p className="text-tiny lg:xs xl:text-sm uppercase font-bold truncate">{artist}, {year}</p>
                            <small className="text-default-500 truncate">{format}</small>
                            <h4 className="font-bold text-large xl:text-xl truncate text-end">${price}</h4>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}
