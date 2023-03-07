import React from "react";
import ContactPageJumbotron from "../ContactPageJumbotron/ContactPageJumbotron";
import "./ContactPage.css";
import "https://kit.fontawesome.com/3c268dfe1e.js";

function ContactPage() {
  return (
    <div className="container">
      <ContactPageJumbotron />
      <div className="row contactStyle">
        <div className="col-sm">
          <a href="mailto:pawel.werbowy@gmail.com" class="btn contactBtn">
            <i class="fa fa-at"></i> Email me
          </a>
        </div>
        <div className="col-sm">
          <a
            href="https://github.com/pav85"
            target="_blank"
            className="btn contactBtn"
          >
            <i className="fa fa-github"></i> GitHub
          </a>
        </div>
        <div className="col-sm">
          <a
            href="https://docs.google.com/document/d/1hlYQQBNad4ctSdPuTKJDcf9bz0epDj0P/edit?usp=sharing&ouid=100228695758662225835&rtpof=true&sd=true"
            target="_blank"
            className="btn contactBtn"
          >
            <i className="fa fa-file"></i> Resume
          </a>
        </div>
        <div className="col-sm">
          <a
            href="https://www.linkedin.com/in/pawel-werbowy-989ab2186/"
            target="_blank"
            className="btn contactBtn"
          >
            <i className="fa fa-linkedin"></i> LinkedIn
          </a>
        </div>
        <div className="col-sm">
          <a
            href="https://www.facebook.com/pawel.werbowy/"
            target="_blank"
            class="btn contactBtn"
          >
            <i class="fa fa-facebook"></i> Facebook
          </a>
        </div>
        <div className="col-sm">
          <a href="tel: 00447510725530" target="_blank" class="btn contactBtn">
            <i class="fa fa-phone"></i> Call me
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
