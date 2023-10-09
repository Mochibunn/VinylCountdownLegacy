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
            {/* <Card
                isPressable
                isFooterBlurred
                className="h-[300px]"
                onClick={() => {
                    navigate(`/album/${id}`);
                }}
            >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">
                        Your day your way
                    </p>
                    <h4 className="text-white/90 font-medium text-xl">
                        {title}
                    </h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src={imgUrl}
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Breathing app icon"
                            className="rounded-full w-10 h-11 bg-black"
                            src={imgUrl}
                        />
                        <div className="flex flex-col">
                            <p className="text-tiny text-white/60">
                                Breathing App
                            </p>
                            <p className="text-tiny text-white/60">
                                Get a good night's sleep.
                            </p>
                        </div>
                    </div>
                    <Button radius="full" size="sm">
                        Get App
                    </Button>
                </CardFooter>
            </Card> */}
        </>
    );
}
