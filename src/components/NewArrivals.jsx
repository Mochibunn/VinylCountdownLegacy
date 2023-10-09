import { Button } from "@nextui-org/react";
import AlbumCard from "./AlbumCard";

export default function NewArrivals({ newArrivals }) {
    // console.log(newArrivals);
    return (
        <div className="p-8">
            <h3 className="text-black font-medium text-6xl mb-6">
                New Arrivals
            </h3>

            <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                {newArrivals.map((newArrival) => (
                    <AlbumCard
                        key={crypto.randomUUID()}
                        {...newArrival.fields}
                        id={newArrival.sys.id}
                    />
                ))}
            </div>

            <Button className="mt-4" color="default">
                Browse more
            </Button>
        </div>
    );
}
