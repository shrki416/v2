import React from "react"
import styled from "styled-components"

const ContactMe = styled.section`
  margin: 0 auto;

  h1 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 2em;
  }

  h2 {
    position: relative;
    margin-bottom: 1.5em;
    font-size: 1.5em;
    letter-spacing: 1px;
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

  @media (min-width: 800px) {
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
  }

  @media (min-width: 1200px) {
    width: 1000px;
  }
`

const Label = styled.label`
  font-family: var(--ff-secondary);
  letter-spacing: 1px;
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
    <h2 className="major">Get in touch</h2>
    <form method="post" action="/#">
      <Label htmlFor="name">Name</Label>
      <input type="text" name="name" id="name" />
      <Label htmlFor="email">Email</Label>
      <input type="email" name="email" id="email" />
      <Label htmlFor="message">Message</Label>
      <textarea name="message" id="message" rows="5"></textarea>

      <input type="submit" className="btn" value="Send Message" />
    </form>
  </ContactMe>
)

export default Contact
