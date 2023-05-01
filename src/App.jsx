import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Vans } from "./components/pages/Vans/Vans";
import { VanDetail } from "./components/pages/Vans/VanDetail";
import "./server";
import { HostLayout } from "./components/HostLayout";
import { Dashboard } from "./components/pages/Host/Dashboard";
import { Income } from "./components/pages/Host/Income";
import { Reviews } from "./components/pages/Host/Reviews";
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
    <div className="site-wrapper">
    <Navbar />
      <Routes>
          <Route path='/react-router-vanlife' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />}/>
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>  
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
      </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;
