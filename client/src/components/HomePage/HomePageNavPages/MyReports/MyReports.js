import React from "react";
import "./MyReports.css";
import StartShift from "../../HomeBody/StartShift/StartShift";
import { useNavigate } from "react-router-dom";
const MyReports = () => {
  const navigate = useNavigate();
  return (
    <div className="my-reports">
                  <button onClick={() => navigate(-1)}>Go back</button>

      <h1>My Reports</h1>

      

    </div>
  );
};

export default MyReports;
