import { useState } from "react";
import "./global.css";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import LogoSlider from "./components/LogoSlider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner />
      <Hero />
      <LogoSlider />
      <Feature />
      <Footer />
    </>
  );
}

export default App;
