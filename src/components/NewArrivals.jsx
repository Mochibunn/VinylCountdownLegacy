import { Card, CardBody, Button } from "@nextui-org/react";
import AlbumCard from "./AlbumCard";

export default function App({ newArrivals }) {
    console.log(newArrivals);
    return (
        <div className="flex-column ">
            <Card className="bg-slate-700">
                <CardBody>
                    <h3 className="text-white font-medium text-xl">
                        New Arrivals
                    </h3>
                </CardBody>
            </Card>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                {newArrivals.map(({ fields }) => (
                    <AlbumCard key={crypto.randomUUID()} {...fields} />
                ))}
            </div>
            <Button color="default" variant="bordered">
                Browse more
            </Button>
        </div>
    );
}
