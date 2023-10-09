import { createClient } from "contentful-management";

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

export { makeNewUser };
