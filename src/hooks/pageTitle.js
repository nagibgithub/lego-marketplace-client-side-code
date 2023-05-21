import { useEffect } from "react";

const pageTitle = title => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};

export default pageTitle;