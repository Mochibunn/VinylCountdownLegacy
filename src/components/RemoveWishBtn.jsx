import { useContext } from "react";
import { UserContext } from "../Contexts";
import { removeFromWishlist } from "../lib/contentfulMngClient";
import { Button } from "@nextui-org/react";
import { FiMinus } from "react-icons/fi";

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
        // setInWishlist(false);
    };
    return (
        <Button
            color="success"
            variant="shadow"
            startContent={<FiMinus />}
            className="w-full h-14 text-lg font-semibold active:bg-danger-300 active:shadow-danger-200 active:text-black hover:bg-danger-400 hover:shadow-danger-200 hover:text-black"
            onClick={() => {
                handleRemoveFromWishlist(id);
            }}
        >
            Remove
        </Button>
    );
}
