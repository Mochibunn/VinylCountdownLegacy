import { useContext } from "react";
import { UserContext } from "../Contexts";
import { removeFromWishlist } from "../lib/contentfulMngClient";
import { Button } from "@nextui-org/react";

export default function RemoveWishBtn({ id }) {
    const { user, setUser } = useContext(UserContext);

    const handleRemoveFromWishlist = (albumId) => {
        removeFromWishlist(user[0], id);
        setUser((prev) =>
            prev.map((user) => {
                const updatedWishlist = user.fields.wishlist.filter(
                    (album) => album.sys.id !== albumId
                );
                return {
                    ...user,
                    fields: { ...user.fields, wishlist: updatedWishlist },
                };
            })
        );
    };
    return (
        <Button
            color="warning"
            onClick={() => {
                handleRemoveFromWishlist(id);
                console.log(user[0].fields.wishlist);
            }}
        >
            Remove
        </Button>
    );
}
