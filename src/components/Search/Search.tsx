import { useState } from "react";

import search from "../../images/icons/search.png";
import styles from "./Search.module.scss";

const Search = () => {
  const [input, setInput] = useState("");

  const clearValue = () => {
    console.log(`Searching ${input}`);
    setInput("");
  };

  return (
    <div className={styles.search}>
      <form className={styles.form}>
        <input
          className={styles.input}
          placeholder="You can write here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </form>
      <button className={styles.button} onClick={() => clearValue()}>
        {/* <img src={search} alt="search"></img> */}
        Search
      </button>
    </div>
  );
};

export default Search;
