import Header from "../components/Header";
import NewArrivals from "../components/NewArrivals";
import LoadingPage from "./LoadingPage";
import { getNewArrivals } from "../lib/contentfulClient";
import { useState, useEffect } from "react";

export default function LandingPage() {
    const [newArrivals, setNewArrivals] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(false);
        getNewArrivals()
            .then((albumData) => {
                setNewArrivals(albumData);
                setIsLoaded(true);
            })
            .catch((error) => console.error(error));
    }, []);
    // if (!isLoaded) return <LoadingPage />;
    return (
        <>
            {!isLoaded ? (
                <LoadingPage />
            ) : (
                <>  
                    <Header />
                    <NewArrivals
                        // isLoaded={isLoaded}
                        newArrivals={newArrivals}
                    />
                </>
            )}
        </>
    );
}
