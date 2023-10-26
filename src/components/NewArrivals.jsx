import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import AlbumCard from "./AlbumCard";

export default function NewArrivals({ newArrivals }) {
    const navigate = useNavigate();
		const limit = 15; // Adjust to limit number of albums to show
    return (
        <div className="p-8 pt-0">
            <h3 className="font-bold text-5xl mb-6 text-center md:text-left">New Arrivals</h3>

            <div className="gap-y-8 grid grid-cols-2 sm:grid-cols-5">
                {newArrivals.slice(0, limit).map((newArrival) => (
                    <AlbumCard
                        key={crypto.randomUUID()}
                        {...newArrival}
												imgUrl={newArrival.img_url}
                        id={newArrival.id}
                    />
                ))}
            </div>
            <div className="w-full  flex justify-end">
                <Button
                    onClick={() => {
                        navigate("search");
                    }}
                    className="mt-4 font-semibold"
                    color="default"
                >
                    Browse more
                </Button>
            </div>
        </div>
    );
}
