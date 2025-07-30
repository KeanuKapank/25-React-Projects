import React, { useEffect, useState } from "react";
import { User } from "./user";

const GitHubProfileFinder = () => {
  const [username, setUserName] = useState<string>("KeanuKapank");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchUserData() {
    try {
      setLoading(false);
      const res = await fetch(`https://api.github.com/users/${username}`);

      const data = await res.json();

      if (data) {
        console.log(data);
        setUserData(data);
        setLoading(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function handleSubmit({ username }: string) {
    fetchUserData();
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!loading) {
    return <p>Loading, Please Wait</p>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="username"
          placeholder="search by username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => handleSubmit(username)}>Search</button>
        {userData !== null ? <User user={userData} /> : null}
      </div>
    </div>
  );
};

export default GitHubProfileFinder;
