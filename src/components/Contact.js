import React from "react";
import "../styles/Contact.css";

export default function Contact(){
  return(
    <>
      <section className="sec5">
          <div className="contact-wrapper">

            <h1 className="lets-start">Let's get started.</h1>
  
            <div className="project-cnt">
              <h1>Write me your project</h1>
              <form action='https://formsubmit.co/sushilabish15670@gmail.com' method="post">
                  <input id="name-input" type="text" placeholder="Enter your name" />
                  <input id="email-input" type="email" placeholder="Enter your mail"/>          
                  <textarea id="text-input" placeholder="Type something....."/>
                  <input id="submit-btn" type="submit"/>
              </form>
            </div>

          </div>
      </section>
    </>
  )
}