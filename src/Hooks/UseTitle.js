import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = ` Weero Dental - ${title}`;
  }, [title]);
};

export default UseTitle;
