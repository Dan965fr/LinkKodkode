import React from "react";
import { Link } from "react-router";
import Logo from "./Logo";
import Slogan from "./Slogan";
import Content from "./Content";
import "./Layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <header className="layout-header">
        <Slogan />
        <Logo />
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/add-post" className="nav-link">add post</Link>
        </nav>
      </header>
      <Content>{children}</Content>
    </div>
  );
}