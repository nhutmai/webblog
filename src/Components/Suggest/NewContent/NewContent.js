import React from "react";
import { contentInfors } from "../../../Redux/contentandInfor";

function NewContent() {
  return (
    <div>
      {contentInfors.map((contentInfor) => (
        <div className="newcontent" key={contentInfor.Id}>
          <img src={contentInfor.Img} alt="logo" />
          <div> Views {contentInfor.Views}</div>
          <div> {contentInfor.Headers}</div>
          <div> like:{contentInfor.Likes}</div>
          <div> Comment:{contentInfor.Comments.total}</div>
        </div>
      ))}
    </div>
  );
}

export default NewContent;
