import { createClient } from "contentful-management";

const mngClient = createClient({
    accessToken: "CFPAT-9FIovKgJafb_y5dqoSK0a3qRLNPaXZgH0pCZP6T7Ne4",
});

/**
 * Function to create new user in Contentful
 * @params object - Object that must have `firstName`
 * @returns void
 */
const makeNewUser = (newUser) => {
    mngClient
        .getSpace("mzz74ba5zfwb")
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
