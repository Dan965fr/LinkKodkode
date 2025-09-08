import React from "react";
import Logo from "./Logo";
import Slogan from "./Slogan";
import Content from "./Content";
import "./Layout.css";

export type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <header className="layout-header">
        <Slogan />
        <Logo />
      </header>
      <Content>{children}</Content>
    </div>
  );
}