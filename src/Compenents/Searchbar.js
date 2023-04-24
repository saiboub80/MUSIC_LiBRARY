import { useState } from "react";

function Searchbar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder=" Enter a reach term here"
      />
      <input type="Submit" />
    </form>
  );
}
export default Searchbar;
