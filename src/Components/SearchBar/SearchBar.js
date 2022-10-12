import React, { useState } from "react";
import useLocalStorage from "../../util/useLocalStorage";
import "./SearchBar.css";
export default function SearchBar(props) {
  const [term, setTerm] = useState("");
  const [storedTerm, setStoredTerm] = useLocalStorage("storedTerm", "");
  ////////////////////////////////
  // Method
  const handleSubmit = () => {
    const termToSearch = term ? term : storedTerm;
    props.onSearch(termToSearch);
  };

  const handleTermChange = ({ target }) => {
    setTerm(target.value);
    setStoredTerm(target.value);
    console.log(term);
  };

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} value={term ? term : storedTerm} />
      <button className="SearchButton" onClick={handleSubmit}>
        SEARCH
      </button>
    </div>
  );
}
