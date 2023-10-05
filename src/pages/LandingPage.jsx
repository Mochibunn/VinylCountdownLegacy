import Header from "../components/Header";
import NewArrivals from "../components/NewArrivals";
import { getAlbums } from "../lib/contentfulClient";
import { useState, useEffect } from "react";

export default function LandingPage() {
    const [allAlbums, setAllAlbums] = useState([]);

    useEffect(() => {
        getAlbums()
            .then((albumData) => setAllAlbums(albumData))
            .catch((error) => console.error(error));
    }, []);
    return (
        <>
            <Header />
            <NewArrivals allAlbums={allAlbums} />
        </>
    );
}
