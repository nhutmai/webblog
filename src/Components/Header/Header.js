import React from "react";
import './Header.css'
function Header() {
  return (
    <div className="header">
      <div className="header_logo">BLOG</div>
      <div className="header_home">HOME</div>
      <div className="header_creator">CREATOR</div>
      <div className="header_createcontent">TẠO BLOG</div>
      <div className="header_search">
        <input type="text" className="header_search-input" />
        <button className="header_search-search">Search</button>
      </div>
      
    </div>
  );
}
export default Header;
