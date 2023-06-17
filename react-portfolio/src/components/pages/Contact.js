import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [invalidEmail, setInvalidEmail] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;
    console.log(inputName, inputValue);

    if (inputName === "name") {
      setName(inputValue);
    } else if (inputName === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFieldRequiredMessage = (e) => {
    const { target } = e;
    const inputName = target.name;

    if (inputName === "name") {
      setName("Name field required");
    } else if (inputName === "email") {
      setEmail("Email field required");
    } else {
      setMessage("Message field required");
    }
  };

  const handleFormSend = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setInvalidEmail("Email invalid");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <form className="form">
        <h2>Contact Me</h2>
        <h3>Name:</h3>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onMouseOut={handleFieldRequiredMessage}
          type="text"
        ></input>
        <h3>Email:</h3>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onMouseOut={handleFieldRequiredMessage}
          type="text"
        ></input>
        <h3>Message:</h3>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onMouseOut={handleFieldRequiredMessage}
          type="text"
        ></textarea>
        <button type="button" onClick={handleFormSend}>
          Send
        </button>
        <p> {invalidEmail}</p>
      </form>
    </div>
  );
}

export default Contact;
