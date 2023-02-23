import React, { useState } from "react";
import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

const LinkedIn = () => {
  // const loading = true;
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.open(
        "https://www.linkedin.com/in/john-christopher-deleon-profile/"
      );

      // window.open("http://localhost:3000/");
      setLoading(false);
    }, 2000);
    // console.log(timeout);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div className="linkedin-container">
        {loading ? (
          <h1> will direct in 1 sec... </h1>
        ) : (
          <button className="back-btn" onClick={() => navigate("/")}>
            Back to Main
          </button>
        )}
      </div>
    </>
  );
};

export default LinkedIn;
