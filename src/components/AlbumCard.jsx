import {
    Card,
    CardBody,
    // CardFooter,
    CardHeader,
    // Button,
    Image,
    Skeleton,
} from "@nextui-org/react";
import { useState } from "react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Tilt from "react-parallax-tilt";

export default function AlbumCard({
    artist,
    format,
    imgUrl,
    // media,
    price,
    // sleeve,
    // spotifyUrl,
    title,
    year,
    id,
    // isLoaded,
}) {
    // const [isLoaded, setIsLoaded] = useState(true);
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(true);
    setIsLoaded; //Purely so that VS Code shuts up about the function never getting called
    const handleClick = () => {
        navigate(`/album/${id}`);
        window.scrollTo(0, 0);
    };
    return (
        <>
            <Card
                isPressable
                className="py-0 mx-3 sm:mx-0 md:mx-1 lg:mx-3 w-11/12"
                onClick={handleClick}
            >
                <CardHeader className="p-0">
                    <Skeleton isLoaded={isLoaded} className="rounded-xl">
                        <Image
                            alt="Card background"
                            className="rounded-xl"
                            src={imgUrl}
                            // width="100%"
                            // height="100%"
                        />
                    </Skeleton>
                </CardHeader>
                <CardBody className="pb-0 pt-3 px-4 sm:px-2 lg:px-4">
                    <div className="mb-3">
                        <div className="w-full flex flex-col truncate">
                            <Skeleton
                                isLoaded={isLoaded}
                                classNames={{
                                    base: "dark:bg-transparent",
                                }}
                                className="rounded-lg"
                            >
                                <h4 className="font-bold text-large sm:text-sm md:text-xl lg:text-l truncate break-all">
                                    {title}
                                </h4>
                            </Skeleton>
                            <Skeleton
                                isLoaded={isLoaded}
                                classNames={{
                                    base: "dark:bg-transparent",
                                }}
                                className="rounded-lg"
                            >
                                <p className="text-tiny lg:xs xl:text-sm uppercase font-bold truncate">
                                    {artist}, {year}
                                </p>
                            </Skeleton>
                            <Skeleton
                                isLoaded={isLoaded}
                                classNames={{
                                    base: "dark:bg-transparent",
                                }}
                                className="w-2/5 rounded-lg"
                            >
                                <small className="text-default-500 truncate">
                                    {format}
                                </small>
                            </Skeleton>
                            <Skeleton
                                isLoaded={isLoaded}
                                classNames={{
                                    base: "dark:bg-transparent",
                                }}
                                className="w-2/5 rounded-lg self-end"
                            >
                                <h4 className="font-bold text-large xl:text-xl truncate text-end">
                                    ${price}
                                </h4>
                            </Skeleton>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}
