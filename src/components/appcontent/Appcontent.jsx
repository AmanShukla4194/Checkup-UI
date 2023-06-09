import React from "react";
import './appcontent.css';
import Delete_Img from '../../assests/Delete_img.png'

function Content(props) {
  return (
    <div className="content">
      <span id="time">{props['time']}</span>
      <span id="date">{props['date']}</span>
      <span id="name">{props['name']}</span>
      <span id="id">{props['id']}</span>
      <span id="condition">{props['condition']}</span>
      <img
        src={Delete_Img}
        alt="delete"
      />
    </div>
  );
}
export default Content;