import { Chip } from "@nextui-org/react";

export const GenreMap = (array) => {
    if (!array || !array.length) return;
    const result = array.map((item) => {
        return (
            <Chip
                className="mr-2 my-1"
                iscompact="true" //Technically writing just "isCompact" will work but the console throws a warning in the album page
                key={`${item}`}
                size="sm"
            >
                {`${item}`}
            </Chip>
        );
    });
    return result;
};

//Maps an array and returns each item as a pretty, small compact grey chip. Used in the search page and the album page
