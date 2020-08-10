import React from "react";
import reactDom from "react-dom";
import Postinfo from "./postinfo.js";
import Note from "./note";

function Post() {
  // function Add() {}
  return (
    <div>
      <div className="postbar"></div>
      <h1 className="head2">Posts</h1>
      <div className="posts">
        <dl className="dictionary">
          {Postinfo.map((noteItem) => (
            <Note
              key={noteItem.key}
              caption={noteItem.caption}
              content={noteItem.content}
              img={noteItem.img}
            />
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Post;
