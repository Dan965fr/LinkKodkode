import React from "react";
import { Link, useNavigate } from "react-router";
import Logo from "./Logo";
import Slogan from "./Slogan";
import Content from "./Content";
import "./Layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  return (
    <div className="layout">
      <header className="layout-header">
        <Slogan />
        <Logo />
        <nav>
          <button onClick={() => navigate("/")} className="nav-button">Home</button>
          <button onClick={() => navigate("/add-post")} className="nav-button">Add Post</button>
        </nav>
      </header>
      <Content>{children}</Content>
    </div>
  );
}