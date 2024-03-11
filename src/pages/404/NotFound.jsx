import React, { memo } from "react";
import "./not-found.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const gotoHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <h1>404</h1>
      <p>Oops! Something is wrong.</p>
      <button className="button" href="#" onClick={gotoHome}>
        <i className="icon-home"></i> Go back in initial page, is better.
      </button>
    </div>
  );
};

export default memo(NotFound);
