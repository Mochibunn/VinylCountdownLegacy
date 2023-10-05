import { createClient } from "contentful";

const client = createClient({
    space: "mzz74ba5zfwb",
    accessToken: "qip5rmOLyuFNm33Av0mWcV9volA1KAwFjfQvK4hmHdA",
});

const getAlbums = async () => {
    try {
        const getAlbumEntries = await client.getEntries({
            content_type: "album",
        });

        console.log(getAlbumEntries.items);
        return getAlbumEntries.items;
    } catch (error) {
        console.error(error.message);
    }
};

export { getAlbums };
