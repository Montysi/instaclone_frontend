import React from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import "./WebsiteLayout.css";

const Layout = ({ children, loggedUser }) => {
  return (
    <div className="layout">
      <Header loggedUser={loggedUser} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
