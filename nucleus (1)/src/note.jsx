import React from "react";
import { TiHeartOutline } from "react-icons/ti";
function Note(props) {
  const [l, set] = React.useState(false);
  function click() {
    set((prevValue) => {
      return !prevValue;
    });
  }

  return (
    // <div className="pos">
    //   <img src={props.img} alt="post"></img>
    //   <h3 className="caption">{props.caption}</h3>
    //   <div className="comment:">
    //     <h3 className="comhead">Comments</h3>
    //     <h3 className="combox">{props.content}</h3>
    //   </div>
    // </div>
    <div className="term">
      <dt>
        <img src={props.img} alt="post"></img>
        <br />
        <TiHeartOutline
          style={{ backgroundColor: l && "red" }}
          onClick={click}
          className="heart"
        />

        <h3 className="caption">{props.caption}</h3>
      </dt>
      <div className="comment">
        <h3 className="comhead">Comments:</h3>
        <h3 className="combox">{props.content}</h3>
      </div>
    </div>
  );
}

export default Note;
