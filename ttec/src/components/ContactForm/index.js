import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const contact_number = (Math.random() * 100000) | 0;
    // add the following code to set the value of the hidden input field
    const contactNumberInput = document.createElement("input");
    contactNumberInput.type = "hidden";
    contactNumberInput.name = "contact_number";
    contactNumberInput.value = contact_number;
    form.current.appendChild(contactNumberInput);
    const formBtn = document.querySelector(".inputBoxBtn");
    // send the form with the updated form.current
    emailjs
      .sendForm(
        "service_enpvni6",
        "contact_form",
        form.current,
        "iwUP8eH1NlcSvoxkb"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            let inputs = document.querySelectorAll("input");
            inputs.forEach((input) => {
              input.value = "";
              input.style.borderBottom = "1px solid var(--green)";
            });
            formBtn.style.background = "var(--green)";
            formBtn.textContent = "Message Sent";
            setTimeout(() => {
              formBtn.style.background = "var(--red)";
              formBtn.textContent = "Submit";
              inputs.forEach((input) => {
                input.value = "";
                input.style.borderBottom = "1px solid var(--red)";
              });
            }, 5000);
          }
        },
        (error) => {
          console.log(error.text);
          formBtn.textContent = "Please Try Again";
          setTimeout(() => {
            formBtn.textContent = "Submit";
          }, 5000);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <div className="inputBox-container">
        <div className="inputBox">
          <input
            type="name"
            name="user_name"
            required="required"
            placeholder="* Name"
          />
        </div>
        <div className="inputBox">
          <input
            type="email"
            name="user_email"
            required="required"
            placeholder="* Email"
          />
        </div>
        <div className="inputBox inputBox-message">
          <input
            type="text"
            name="message"
            required="required"
            className="inputBox-message-input"
            placeholder="* I'm Reaching Out Because..."
          />
        </div>
      </div>
      <div className="inputBoxBtn-Container">
        <button
          type="submit"
          className="inputBoxBtn"
          value="send"
          id="submitBtn"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
