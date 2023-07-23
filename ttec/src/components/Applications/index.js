import React from "react";
import ApplicationForm from "../ApplicationForm";

const Applications = () => {
  return (
    <section id="application">
        <div className="overlay"></div>
      <header>
        <h1 className="application-header">Apply To TTEC</h1>
      </header>
      <div className="application-container">
        <div className="application-info">
          <h3>Here's how it works</h3>
          <ol>
            <li> ~ Fill out our application form</li>
            <li> ~ You will be contacted for an interview</li>
            <li>
              ~ Upon acceptance into our program you will meet with our guidance
              counselor who will walk you through the TRI and SUNY registration
              process.
            </li>
            <li>
              ~ You will receive a special TRI discount code for registered TTEC
              students.
            </li>
            <li>
              ~ The guidance counselor will assist you in choosing your degree
              options and career paths
            </li>
            <li> ~ Fill out our payment agreement and registration</li>
            <li> ~ Sign your TTEC contract</li>
          </ol>
          <h3>Tuition Costs</h3>
          <ul>
            <li>$5,000 CAD annually tuition to TTEC</li>
            <li>$4,000 USD per semester to SUNY</li>
            <li>$2600 CAD for 60 credits from TRI</li>
            <li>$300 Registration fee (deducted from your tuition)</li>
          </ul>
        </div>
        <ApplicationForm />
      </div>
    </section>
  );
};

export default Applications;
