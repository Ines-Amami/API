import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./UserList.js";

function App() {
  const [listOfUSer, setListOfUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      axios(`https://jsonplaceholder.typicode.com/users`).then((result) => {
        setListOfUser(result.data);
        setIsLoading(false);
      });
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      <UserList listOfUSer={listOfUSer} isLoading={isLoading} />
    </div>
  );
}

export default App;
