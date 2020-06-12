import React from "react"
import styled from "styled-components"

const ContactMe = styled.section`
  width: 1000px;
  margin: 0 auto;
  display: grid;

  h1 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 2em;
  }

  span {
    position: relative;
  }

  span:before {
    font-family: var(--ff-secondary);
    content: "Contact Me";
    font-size: 1.5em;
    position: absolute;
    color: rgba(255, 198, 0, 0.5);
    z-index: -1;
    white-space: nowrap;
    left: 30%;
    top: 15%;
  }

  h2 {
    position: relative;
    margin-bottom: 1.5em;
    font-size: 1.5em;
  }
  h2:before {
    content: "";
    position: absolute;
    height: 5px;
    width: 30px;
    background: var(--clr-accent);
    left: 0;
    top: -7px;
    border-radius: 1em;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 1em;
    border-radius: 0.2em;
    border: 1px solid var(--clr-dark);
    color: var(--clr-dark);
  }

  input[type="text"]:focus,
  textarea:focus {
    outline: 3px solid var(--clr-accent);
  }

  input[type="submit"] {
    margin-top: 2em;
    border: none;
  }
`

const Label = styled.label`
  font-family: var(--ff-secondary);
  display: block;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
`

const Contact = () => (
  <ContactMe id="contact">
    <h1>
      <span>Contact Me!</span>
    </h1>
    <div className="inner">
      <h2 className="major">Get in touch</h2>
      <form method="post" action="/#">
        <div>
          <div className="field">
            <Label htmlFor="name">Name</Label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field">
            <Label htmlFor="email">Email</Label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="field">
            <Label htmlFor="message">Message</Label>
            <textarea name="message" id="message" rows="5"></textarea>
          </div>
        </div>
        <input type="submit" className="btn" value="Send Message" />
      </form>
    </div>
  </ContactMe>
)

export default Contact
