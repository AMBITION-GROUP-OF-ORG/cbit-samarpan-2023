import Footer from "./footer/Footer.js";
import {close} from "./navbar.jsx"
import Navbar from "./navbar.jsx";
import root from "./index.js";
import React from "react";
import Loading from "./Loading/Loading.js";
import {Suspense }from "react"; 
const Home=React.lazy(()=>import("./home"));
export default function render_home(){
		close();
	root.render(
		<>
		< Navbar />
	<Suspense fallback={<Loading />}>
    <Home />
  </Suspense>
  <Footer />
  </>

		);
}