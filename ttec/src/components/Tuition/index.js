import React from "react";

const Tuition = () => {
  return (
    <section id="tuition">
      <div className="img-overlay-container">
      </div>
      <div className="tuition-container">
        <div className="tuition-info-container">
          <h1>Tuition Cost</h1>
          <p>
            $5,000 CAD annually tuition to TTEC
          </p>
        </div>
        <iframe
          src="https://donorbox.org/embed/make-a-tuition-payment?default_interval=o"
          name="donorbox"
          title="Donorbox tuition form"
          allowpaymentrequest="allowpaymentrequest"
          seamless="seamless"
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </section>
  );
};

export default Tuition;