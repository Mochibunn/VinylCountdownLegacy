import Header from "../components/Header";
import NewArrivals from "../components/NewArrivals";
import { getNewArrivals } from "../lib/contentfulClient";
import { useState, useEffect } from "react";

export default function LandingPage() {
    const [newArrivals, setNewArrivals] = useState([]);

    useEffect(() => {
        getNewArrivals()
            .then((albumData) => setNewArrivals(albumData))
            .catch((error) => console.error(error));
    }, []);
    return (
        <>
            <Header />
            <NewArrivals newArrivals={newArrivals} />
        </>
    );
}
