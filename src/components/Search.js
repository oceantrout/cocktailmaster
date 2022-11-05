import React, { useRef, useState } from "react";
import "./Search.css";

import "./Search.css";
function Search(props) {
  const [ingreName, setIngre] = useState("");
  const inputRef1 = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(inputRef1.current.value);
    console.log("Search - handleSubmit - drink", ingreName);
  };
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input ref={inputRef1} type="text" placeholder={props.placeholder} />
        <div>Press "Submit" for Query</div>
        <input type="submit" />
      </form>
    </div>
  );
}
export default Search;
