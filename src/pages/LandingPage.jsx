import Header from "../components/Header";
import NewArrivals from "../components/NewArrivals";
// import LoadingPage from "./LoadingPage";
import { Progress } from "@nextui-org/react";
import { getNewArrivals } from "../lib/contentfulClient";
import { useState, useEffect } from "react";

export default function LandingPage() {
    const [newArrivals, setNewArrivals] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        getNewArrivals()
            .then((albumData) => setNewArrivals(albumData))
            .catch((error) => console.error(error));
        setIsLoaded(true);
    }, []);
    // if (!isLoaded) return <LoadingPage />;
    return (
        <>
            {!isLoaded ? (
                <div className="flex flex-col items-center justify-center h-screen w-screen">
                    <Progress
                        size="sm"
                        isIndeterminate
                        aria-label="Loading..."
                        className="max-w-md"
                    />
                </div>
            ) : (
                <>
                    {" "}
                    <Header />
                    <NewArrivals
                        isLoaded={isLoaded}
                        newArrivals={newArrivals}
                    />{" "}
                </>
            )}
        </>
    );
}
