import React from "react";
import "./PmManager.css";

const PmManger = () => {
  return <div className="pm-manager">
    <h2>Send Private Message To Manager</h2>
    {/* <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST"> */}
    <div className="form-group">
        <label>Worker Name</label>
        <input type="text" className="form-control" share />
    </div>
    <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label>Message</label>
        <textarea className="form-control" rows="10"></textarea>
    </div>
    <button type="submit">Submit Request</button>
{/* </form> */}
    </div>;
};

export default PmManger;
