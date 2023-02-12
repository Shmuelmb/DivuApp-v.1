import React from "react";
import "./PmManager.css";
import { useState } from "react";

const PmManger = () => {
  function printMessage() {
    console.log();
  }
  const [postContent, setPostContent] = useState(""); // Declare a state variable...
  console.log(postContent);

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
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="Please enter message"
          value={postContent}
          rows={20}
        ></textarea>
      </div>

      <button onClick={(e) => setPostContent(e.target.value)} type="submit">
        Submit Request
      </button>
      {/* </form> */}
    </div>
  );
};

export default PmManger;
