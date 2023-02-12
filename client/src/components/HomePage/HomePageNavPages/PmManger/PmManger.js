import React from "react";
import "./PmManager.css";

const PmManger = () => {
  function printMessage() {
    console.log();
  }

  return (
    <div className="pm-manager">
      <h2>Send Private Message To Manager</h2>
      {/* <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST"> */}
      <div className="form-group">
        <label>Worker Name</label>
        <input type="text" className="form-control" share />
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          placeholder="Enter Message"
          className="form-control"
          rows="20"
        ></textarea>
      </div>
      <button onClick={printMessage} type="submit">
        Submit Request
      </button>
      {/* </form> */}
    </div>
  );
};

export default PmManger;
