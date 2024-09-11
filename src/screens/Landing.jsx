import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import Services from "../components/Sections/Services";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
       <Projects />
      <Blog />
       <Contact />
      <Footer />
    </>
  );
}


