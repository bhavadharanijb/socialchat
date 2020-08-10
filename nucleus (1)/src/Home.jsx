import React from "react";
import reactDom from "react-dom";

function Home() {
  return (
    <div>
      <div className="homebar">
        <h1 className="head">SocialChat </h1>
      </div>

      <img
        className="profile"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmVS9jc0E4MMxw-rRbw9B9GgHVpGZ6Dz1s6Q&usqp=CAU"
        alt="profile-pic"
      ></img>
      <h3 className="username">Bhavdharani Balaji</h3>
      <div>
        <p className="post"> 6</p>
        <p className="post">Post </p>
        <p className="following">150</p>
        <p className="following">Followers</p>
        <p className="followers">100</p>
        <p className="followers">Followers</p>
      </div>
      <div className="bio">
        <h3 className="biotext">BIO</h3>
        <p className="biop">
          <bold>This IS A Demo Task</bold>
        </p>
      </div>
    </div>
  );
}

export default Home;
