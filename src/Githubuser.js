import React from "react";
import { useState, useEffect } from "react";
import useGithub from "./hooks/useGithub";
const Githubuser = ({ username }) => {
  //1. first approach using useState,useEffect hooks method

  //   const [user, setUser] = useState(null);
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     //https:// api.github.com/users/ganeshsadhashivam
  //     const fetchData = async () => {
  //       setLoading(true);
  //       try {
  //         const response = await fetch(
  //           `https://api.github.com/users/${username}`
  //         );
  //         const responseData = await response.json();
  //         setUser(responseData);
  //         setLoading(false);
  //         console.log(responseData);
  //       } catch (error) {
  //         setError(true);
  //         setLoading(false);
  //       }
  //     };
  //     fetchData();
  //   }, [username]);

  //2. using custom hooks method

  const { user, loading, error } = useGithub(username);
  return (
    <div className="details">
      {loading && <p>Loading ...</p>}
      {error && <p>{error.message}</p>}
      {user && (
        <ul>
          <li>
            <img src={user.avatar_url} alt={user.login} />
          </li>
          <li>
            <strong>Name : {user.name}</strong>
          </li>
          <li>
            <strong>Bio : {user.bio ? user.nio : "NA"}</strong>
          </li>
          <li>followers : {user.followers ? user.followers : 0}</li>
          <li>following : {user.following ? user.following : 0}</li>
        </ul>
      )}
    </div>
  );
};

export default Githubuser;
