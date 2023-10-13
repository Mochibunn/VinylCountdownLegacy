import { useContext } from "react";
import { UserContext } from "../Contexts";
import { Card } from "@nextui-org/react";
import AlbumCard from "../components/AlbumCard";
import RemoveWishBtn from "../components/RemoveWishBtn";

export default function Wishlist() {
    const { user } = useContext(UserContext);

    // console.log(user[0].fields.wishlist);
    return (
        <div className="p-8 min-h-screen">
            <h3 className="font-medium text-6xl mb-6">My Wishlist</h3>

            <div
                className={
                    user &&
                    user[0].fields.wishlist &&
                    user[0].fields.wishlist.length &&
                    `gap-4 grid grid-cols-2 sm:grid-cols-4`
                }
            >
                {user &&
                user[0].fields.wishlist &&
                user[0].fields.wishlist.length ? (
                    user[0].fields.wishlist.map((item) => (
                        //wrapping in Card has much better results than wrapping in a div
                        // not sure quickly how to get rid if the new padding
                        <Card key={crypto.randomUUID()} className="px-0">
                            <AlbumCard
                                key={crypto.randomUUID()}
                                {...item.fields}
                                id={item.sys.id}
                            />
                            <RemoveWishBtn {...item.fields} id={item.sys.id} />
                        </Card>
                    ))
                ) : (
                    <h6 className="text-2xl w-full">
                        Looks like you haven`t added anything yet...
                    </h6>
                )}
            </div>
        </div>
    );
}
