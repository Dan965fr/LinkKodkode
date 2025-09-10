import React from "react";
import {useNavigate } from "react-router";
import Logo from "./Logo";
import Slogan from "./Slogan";
import Content from "./Content";
import "./Layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  return (
    <div className="layout">
      <header className="layout-header">
        <div className="header-left">
          <Slogan />
        </div>
        
        <div className="header-center">
          <nav>
            <button onClick={() => navigate("/register")} className="nav-button">SignUp</button>
            <button onClick={() => navigate("/login")} className="nav-button">Login</button>
            <button onClick={() => navigate("/")} className="nav-button">Home</button>
            <button onClick={() => navigate("/add-post")} className="nav-button">Add Post</button>
         </nav>
        </div>

        <div className="header-right">
          <Logo />
        </div>
        
      </header>
      
      <Content>{children}</Content>
      
      
    </div>
  );
}