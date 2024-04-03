import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home"
import { About } from "./components/about"
import { Services } from "./components/services";
import { Tours } from "./components/tours";
import { Footer } from "./components/footer";




function Store() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Store />);
