// import { useState } from "react";
import "../App.css";
import "../styles.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <img src="logo.png" alt="movieDux-logo" className="logo" />
        <h2 className="appsubtitle">
          It's time for popcorn! Find your next movie here.
        </h2>
      </div>
    </>
  ); // can not return more than one tag <div></div><div></div> is wrong use wraper tag <></> and write ur html in this
}
