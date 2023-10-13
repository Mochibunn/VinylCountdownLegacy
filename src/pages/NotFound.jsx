import { useNavigate } from "react-router-dom";
import { notFoundQuotes } from "../assets/NotFoundQuotes";
import SiteLogo from "../assets/SiteLogo";
import { Button } from "@nextui-org/react";

export default function NotFound() {
    const navigate = useNavigate();
    
    const randomQuote = () => {
        const itm = Math.floor(Math.random() * notFoundQuotes.length);
        return notFoundQuotes[itm];
    };

    return (
        <main className="flex flex-col items-center h-screen px-6">
            <SiteLogo className="my-12 place-items-center h-[250px] w-full" aria-label="vinyl countdown" key="website logo"/>
            <h1 className="text-7xl font-black mb-10">404</h1>
            <p className="text-xl text-center">
                {randomQuote()}
            </p>
            <Button
                onPress={() => navigate(-1)}
                color="secondary"
                className="mt-10"
            >
                Go back
            </Button>
        </main>
    );
}