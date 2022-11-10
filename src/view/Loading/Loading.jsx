import React from "react";
import "./Loading.css"
import { Link } from "react-router-dom";

export default function Loading() {
  return (
    <body className="loading">
      <div>
        <Link to="/home">
          <button className="home404">BACK TO HOME</button>
        </Link>
      </div>
    </body>
  );
}
