import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (

    <aside
      style={{
        width: "230px",
        height: "100vh",
        backgroundColor: "#0b345a",
        color: "#ffffff",
        position: "fixed",
        top: "60px",
        left: 0,
        paddingTop: "2rem",
      }}
    >

      <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

        <Link
          to="/dashboard"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "0.7rem 1rem",
            display: "block",
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/clinical"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "0.7rem 1rem",
            display: "block",
          }}
        >
          Clinical
        </Link>

        <Link
          to="/patients"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "0.7rem 1rem",
            display: "block",
          }}
        >
          Patients
        </Link>

        <Link
          to="/settings"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "0.7rem 1rem",
            display: "block",
          }}
        >
          Settings
        </Link>

      </nav>

    </aside>

  );

};

export default Sidebar;
