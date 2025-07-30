import React from "react";
import "./style.css";
import { FaClock } from "react-icons/fa";

export const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repo,
    html_url,
    name,
    login,
    created_at,
    bio,
    location,
    public_repos,
  } = user;

  const dateCreated = new Date(created_at);

  return (
    <div className="user-container">
      <div className="personal-info">
        <img src={avatar_url} className="avatar" />
        <div>
          <a href={html_url}>{name || login}</a>
        </div>
      </div>
      <p>{bio}</p>
      <p>{location}</p>
      <p>Public Repos : {public_repos}</p>
      <div className="github-info">
        <div className="created">
          <div className="created-heading">
            <FaClock size={20}></FaClock>
            <h5>Created At</h5>
          </div>
          <h3>{dateCreated.toDateString()}</h3>
        </div>
      </div>
    </div>
  );
};
