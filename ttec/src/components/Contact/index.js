import React from "react";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <section id="contact">
      <header className="contact-header">
        <h1>Reach Out To TTEC</h1>
      </header>
      <div className="contact-page-container">
        <ul className="contact-links-container">
          <li>
            <a href="mailto:ttecyeshiva@gmail.com">
              Email: ttecyeshiva@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:647-648-2845">Phone: 647-648-2845</a>
          </li>
          <li>
            <a href="https://goo.gl/maps/JfwxE36Cr4cnVY297">
              Mailing Address: 461 York Hill Blvd, Thornhill, ON L4J 3C6
            </a>
          </li>
        </ul>
        <ContactForm />
      </div>
      <div className="maps-container">
        <header className="maps-container-header">
          <h1>Locations</h1>
        </header>
        <div className="iframe-container">
          <header>
            <h2>Viewmount</h2>
          </header>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d92176.617998631!2d-79.5380358!3d43.7828361!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33a878dc71b1%3A0x10f7ff8f8ac63f67!2sViewmount%20Shul%20(Congregation%20Toras%20Emes)!5e0!3m2!1sen!2sca!4v1687819098600!5m2!1sen!2sca"
            width="600"
            height="400"
            style={{ border: "0" }}
            allowFullScreen={""}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google maps Viewmount location"
          ></iframe>
        </div>
        <div className="iframe-container">
          <header>
            <h2>Agudah North</h2>
          </header>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.7939906706224!2d-79.4326346!3d43.7356063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b325c25a5b869%3A0x9ce92114d211a78e!2sAgudath%20Israel%20Congregation%20(%22Agudah%20North%22)!5e0!3m2!1sen!2sca!4v1687819094710!5m2!1sen!2sca"
            width="400"
            height="267"
            style={{ border: "0" }}
            allowFullScreen={""}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google maps Agudah North location"
          ></iframe>
        </div>
        <div className="iframe-container">
          <header>
            <h2>Thornhill</h2>
          </header>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.4793698712315!2d-79.44192629999999!3d43.8044152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c4911d4c745%3A0xdd02e6f1d9c99197!2sKollel%20Ohr%20Yosef!5e0!3m2!1sen!2sca!4v1687819474743!5m2!1sen!2sca"
            width="400"
            height="267"
            style={{ border: "0" }}
            allowFullScreen={""}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google maps Thornhill location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;