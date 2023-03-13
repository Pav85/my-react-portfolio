import React from "react";
import ContactPageJumbotron from "../ContactPageJumbotron/ContactPageJumbotron";
import "./ContactPage.css";
import {
  FaAt,
  FaGithub,
  FaFile,
  FaLinkedin,
  FaFacebook,
  FaPhone,
} from "react-icons/fa";
import "../fonts.css";

function ContactPage() {
  return (
    <div className="container">
      <ContactPageJumbotron />
      <div className="row contactStyle">
        <div className="col-sm">
          <a href="mailto:pawel.werbowy@gmail.com" class="btn contactBtn">
            <FaAt className="icon" size={"36px"} />
            &nbsp;Email me
          </a>
        </div>
        <div className="col-sm">
          <a
            href="https://github.com/pav85"
            target="_blank"
            rel="noreferrer"
            className="btn contactBtn"
          >
            <FaGithub className="icon" size={"36px"} />
            &nbsp;GitHub
          </a>
        </div>
        <div className="col-sm">
          <a
            href="https://docs.google.com/document/d/1hlYQQBNad4ctSdPuTKJDcf9bz0epDj0P/edit?usp=sharing&ouid=100228695758662225835&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
            className="btn contactBtn"
          >
            <FaFile className="icon" size={"36px"} />
            &nbsp;Resume
          </a>
        </div>
        <div className="col-sm">
          <a
            href="https://www.linkedin.com/in/pawel-werbowy-989ab2186/"
            target="_blank"
            rel="noreferrer"
            className="btn contactBtn"
          >
            <FaLinkedin className="icon" size={"36px"} />
            &nbsp;LinkedIn
          </a>
        </div>
        <div className="col-sm">
          <a
            href="https://www.facebook.com/pawel.werbowy/"
            target="_blank"
            rel="noreferrer"
            class="btn contactBtn"
          >
            <FaFacebook className="icon" size={"36px"} />
            &nbsp;Facebook
          </a>
        </div>
        <div className="col-sm">
          <a
            href="tel: 00447510725530"
            target="_blank"
            rel="noreferrer"
            class="btn contactBtn"
          >
            <FaPhone className="icon" size={"36px"} />
            &nbsp;Call me
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
