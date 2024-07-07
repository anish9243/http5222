import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <main id="main">
        <Hero />
        <FeaturedProducts />
      </main>
      <Footer />
    </>
  );
}

export default App;
