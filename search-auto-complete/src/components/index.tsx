import React, { useState, useEffect } from "react";
import Suggestion from "./Suggestion";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchParam, setsearchParam] = useState("");

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  async function fetchListOfUsers() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length > 0) {
        const userNames = data.users.map((user) => user.firstName);
        setUsers(userNames);
        setLoading(false);
      }
      setLoading(true);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setsearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
    }
  }

  return (
    <div className="search-complete-container">
      <input
        value={searchParam}
        type="text"
        placeholder="Search Users Here..."
        onChange={(e) => handleChange(e)}
      />
      {<Suggestion data={filteredUsers} />}
    </div>
  );
};

export default SearchAutoComplete;
