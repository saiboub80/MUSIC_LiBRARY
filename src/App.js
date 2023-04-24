import { useState, useEffect } from "react";
import Gallery from "./Compenents/Gallery";
import Searchbar from "./Compenents/Searchbar";
import { DataContext } from "./Contexts/DataContexts";

function App() {
  const [search, setSearch] = useState(" ");
  const [message, setMessage] = useState("Search for Music!");
  const [data, setData] = useState([]);

  const API_URL = 'https://itunes.apple.com/search?term=';
  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        const URL = encodeURI(API_URL + search);
        const response = await fetch(URL);
        const data = await response.json();
        if (data.results.length > 0) {
          setData(data.results);
        } else {
          setMessage("Not Found");
          setData([])
        }
      };

      fetchData();
    }
  }, [search]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term);
  };
  return (
    <div className="App">
      <Searchbar handleSearch={handleSearch} />
      {message}
      <DataContext.Provider value= {data}>
        <Gallery  />
      </DataContext.Provider>
      
    </div>
  );
}
export default App;
