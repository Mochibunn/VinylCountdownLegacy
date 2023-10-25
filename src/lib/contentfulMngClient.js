import { createClient } from "contentful-management";
// import { getUserById } from "./contentfulClient";

const mngClient = createClient({
    accessToken: import.meta.env.VITE_CONTENTFUL_MNG_ACCESS_TOKEN,
});

/**
 * Function to create new user in Contentful
 * @params object - Object that must have `firstName`
 * @returns void
 */
const makeNewUser = (newUser) => {
    mngClient
        .getSpace(import.meta.env.VITE_CONTENTFUL_SPACE_ID)
        .then((space) => space.getEnvironment("master"))
        .then((environment) =>
            environment.createEntryWithId("user", crypto.randomUUID(), {
                fields: {
                    firstName: {
                        "en-US": newUser.firstName,
                    },
                    lastName: {
                        "en-US": newUser.lastName,
                    },
                    email: {
                        "en-US": newUser.email,
                    },
                    password: {
                        "en-US": newUser.password,
                    },
                    profilePic: {
                        "en-US": newUser.profilePic,
                    },
                },
            })
        )
        .then((entry) => entry.publish())
        .catch(console.error);
};

/**Function to add an album to wishlist in contentful
 * @params userId-string that matches sys id of user, albumId-string that matches sys id of album
 */
const addToWishlist = (userId, albumId) => {
    const newAlbum = {
        sys: {
            id: albumId,
            linkType: "Entry",
            type: "Link",
        },
    };
    // Update entry
    mngClient
        .getSpace(import.meta.env.VITE_CONTENTFUL_SPACE_ID)
        .then((space) => space.getEnvironment("master"))
        .then((environment) => environment.getEntry(userId))
        .then((entry) => {
            if (!entry.fields.wishlist) {
                entry.fields.wishlist = { "en-US": [] };
                entry.fields.wishlist["en-US"].push(newAlbum);
            } else {
                entry.fields.wishlist["en-US"].push(newAlbum);
            }
            return entry.update();
        })
        .then((entry) => {
            console.log(`Entry ${entry.sys.id} updated.`);
            return entry.publish();
        })
        .catch(console.error);

    //logic for fetching user-ending up going a different route
    // mngClient
    //     .getSpace(import.meta.env.VITE_CONTENTFUL_SPACE_ID)
    //     .then((space) => space.getEnvironment("master"))
    //     .then((environment) => environment.getEntry(userId))

    //      .then((entry) => console.log(entry))
    //     .catch(console.error);
};

/**
 *
 * @params user expects and object that has our user data-should use user[0]
 * albumId expects the album sys id
 */
const removeFromWishlist = (user, albumId) => {
    const updatedWishlist = user.fields.wishlist.filter(
        (album) => album.sys.id !== albumId
    );
    const formattedWishlist = updatedWishlist.map((album) => ({
        sys: {
            id: album.sys.id,
            linkType: "Entry",
            type: "Link",
        },
    }));
    mngClient
        .getSpace(import.meta.env.VITE_CONTENTFUL_SPACE_ID)
        .then((space) => space.getEnvironment("master"))
        .then((environment) => environment.getEntry(user.sys.id))
        .then((entry) => {
            entry.fields.wishlist["en-US"] = formattedWishlist;
            return entry.update();
        })
        .then((entry) => {
            console.log(`Entry ${entry.sys.id} updated.`);
            return entry.publish();
        })
        .catch(console.error);
};

// export { makeNewUser, addToWishlist, removeFromWishlist };
