import { nanoid } from "nanoid";

const items = [
    {
        id: nanoid(),
        text: "Home page",
        link: "/"
    },
        {
        id: nanoid(),
        text: "Search Page",
        link: "/search"
    },
        {
        id: nanoid(),
        text: "Contacts page",
        link: "/contacts"
    },
];

export default items;