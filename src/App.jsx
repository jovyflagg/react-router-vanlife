import React from "react";
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Vans, loader as vansLoader} from "./components/pages/Vans/Vans";
import { VanDetail } from "./components/pages/Vans/VanDetail";
import "./server";
import { HostLayout } from "./components/HostLayout";
import { Dashboard } from "./components/pages/Host/Dashboard";
import { Income } from "./components/pages/Host/Income";
import { Reviews } from "./components/pages/Host/Reviews";
import { Layout } from "./components/Layout";
import { HostVans } from "./components/pages/Host/HostVans";
import { HostVanDetail } from "./components/pages/Host/HostVanDetail";
import { Pricing } from "./components/pages/Host/HostVanDetailLayout/Pricing";
import { Details } from "./components/pages/Host/HostVanDetailLayout/Details";
import { Photos } from "./components/pages/Host/HostVanDetailLayout/Photos";
import { NotFound } from "./components/pages/NotFound";
import { Error } from "./components/Error";
import { Login } from "./components/pages/Login";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/react-router-vanlife" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" 
            element={<Vans />} 
            errorElement ={<Error />}
            loader={vansLoader} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={ <Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
  ))
  return (
     <RouterProvider router={router}/>
  );
}

export default App;
