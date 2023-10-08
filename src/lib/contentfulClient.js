import { createClient } from "contentful";

const client = createClient({
    space: "mzz74ba5zfwb",
    accessToken: "qip5rmOLyuFNm33Av0mWcV9volA1KAwFjfQvK4hmHdA",
});

const getAllAlbums = async () => {
    try {
        const getAlbumEntries = await client.getEntries({
            content_type: "album",
        });

        // console.log(getAlbumEntries);
        return getAlbumEntries.items;
    } catch (error) {
        console.error(error.message);
    }
};

const getNewArrivals = async () => {
    try {
        const getAlbumEntries = await client.getEntries({
            content_type: "album",
            limit: 8,
            order: "sys.createdAt",
        });

        return getAlbumEntries.items;
    } catch (error) {
        console.error(error.message);
    }
};

export { client, getAllAlbums, getNewArrivals };
