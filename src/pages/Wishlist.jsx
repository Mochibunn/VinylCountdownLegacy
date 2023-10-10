import { useContext, useEffect } from "react";
import { getUserById } from "../lib/contentfulClient";
import { UserContext } from "../Contexts";
import AlbumCard from "../components/AlbumCard";

export default function Wishlist() {
    const { user, setUser } = useContext(UserContext);

    // useEffect(() => {
    //     getUserById()
    //         .then((userData) => setUser(userData))
    //         .catch((error) => console.error(error));
    // }, [setUser]);

    // console.log(user[0].sys.id);
    return (
        <div className="p-8 min-h-screen">
            <h3 className="text-white font-medium text-6xl mb-6">
                My Wishlist
            </h3>

            <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                {user &&
                    user[0].fields.wishlist.map((item) => (
                        <AlbumCard
                            key={crypto.randomUUID()}
                            {...item.fields}
                            id={item.sys.id}
                        />
                    ))}
            </div>
        </div>
    );
}
