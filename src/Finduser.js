import React, { useState } from "react";
import Githubuser from "./Githubuser";

const Finduser = () => {
  const [username, setUserName] = useState("");
  return (
    <div>
      <h1>FindUser</h1>
      <form action="">
        <input
          type="text"
          placeholder="Enter username"
          onChange={(e) => setUserName(e.target.value)}
        />
      </form>
      <div>
        {username ? (
          <Githubuser username={username} />
        ) : (
          <p>Please Initiate the Search</p>
        )}
      </div>
    </div>
  );
};

export default Finduser;
