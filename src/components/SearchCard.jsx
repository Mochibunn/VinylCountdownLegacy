import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Link,
    Image,
} from "@nextui-org/react";

export default function SearchCard() {
    return (
        <Card className="max-w-[400px]">
            <CardBody>
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md">NextUI</p>
                    <p className="text-small text-default-500">nextui.org</p>
                </div>
            </CardBody>
        </Card>
    );
}
