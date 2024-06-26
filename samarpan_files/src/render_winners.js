import {close} from "./navbar.jsx"
import Footer from "./footer/Footer.js";
import Navbar from "./navbar.jsx";
import root from "./index.js";
import React from "react";
import Loading from "./Loading/Loading.js";
import {Suspense }from "react"; 
const Winner=React.lazy(()=>import("./Winners.js"));
export default function render_winners(){
	close();
	root.render(
		<>
		<Navbar />
	<Suspense fallback={<Loading />}>
    <Winner />
  </Suspense>
  < Footer />
  </>

		);
}