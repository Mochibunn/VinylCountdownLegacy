import { createClient } from "contentful-management";

const mngClient = createClient({
    accessToken: "CFPAT-9FIovKgJafb_y5dqoSK0a3qRLNPaXZgH0pCZP6T7Ne4",
});

mngClient
    .getSpace("mzz74ba5zfwb")
    .then((space) => space.getEnvironment("master"))
    .then((environment) =>
        environment.createEntryWithId("user", crypto.randomUUID(), {
            fields: {
                firstName: {
                    "en-US": "Entry title",
                },
                lastName: {
                    "en-US": "Entry title",
                },
                email: {
                    "en-US": "Entry title",
                },
                password: {
                    "en-US": "Entry title",
                },
                profilePic: {
                    "en-US": "Entry title",
                },
            },
        })
    )
    .then((entry) => console.log(entry))
    .catch(console.error);

//
// const client = contentful.createClient({
//     accessToken: "<content_management_api_key>",
// });

// // Create entry
// client
//     .getSpace("<space_id>")
//     .then((space) => space.getEnvironment("<environment-id>"))
//     .then((environment) =>
//         environment.createEntryWithId("<content_type_id>", "<entry_id>", {
//             fields: {
//                 title: {
//                     "en-US": "Entry title",
//                 },
//             },
//         })
//     )
//     .then((entry) => console.log(entry))
//     .catch(console.error);
