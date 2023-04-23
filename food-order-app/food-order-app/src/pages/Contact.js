import React from "react";
import "../styles/Contact.css";
import AboutImage from "../assets/photo.jpeg";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form action="" id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Enter you name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="name" placeholder="Enter email address" />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id=""
            cols="0"
            rows="6"
            placeholder="Enter you message"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
