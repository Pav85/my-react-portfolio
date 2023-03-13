import React from "react";
import "./Footer.css";
import { FaHeart, FaReact } from "react-icons/fa";

function Footer() {
  return (
    <footer
    // class="text-center p-3 fixed-bottom footer"
    >
      <p>
        Made with {<FaHeart className="icon" size={"24px"} />} by Pawel
        using&nbsp;
        {<FaReact className="icon" size={"28px"} />}&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
    </footer>
  );
}

export default Footer;
