import { useContext } from "react";
// import { getNewArrivals } from "../lib/contentfulClient";
import { UserContext } from "../Contexts";
import AlbumCard from "../components/AlbumCard";

export default function Wishlist() {
    // const [myWishlist, setMyWishlist] = useState();
    const { user } = useContext(UserContext);
    const myWishlist = user[0].fields.wishlist;
    console.log(myWishlist);
    // useEffect(() => {
    //     getNewArrivals()
    //         .then((albumData) => setMyWishlist(albumData))
    //         .catch((error) => console.error(error));
    // }, []);
    return (
        <div className="p-8 min-h-screen">
            <h3 className="text-white font-medium text-6xl mb-6">
                My Wishlist
            </h3>

            <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                {myWishlist &&
                    myWishlist.map((item) => (
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
