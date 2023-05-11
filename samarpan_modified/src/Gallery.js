import gallery_data from  "./data_gallery.js";
// import  gallery_data from "https://cdn.jsdelivr.net/gh/it-is-jayvardhan/jay-projects@main/data_gallery.js";
import {AnimationOnScroll} from "react-animation-on-scroll";
import "./gallery.css";
const gallery=gallery_data.map(gallery_data=>
			<AnimationOnScroll initiallyVisible={true} animateIn="animate__fadeInLeftBig" animateOut="animate__bounceOutRight">
		<div className="first w3-card w3-padding-32 ">
		<img className="w3-image" src={gallery_data.link} alt="loading "/>
		</div>
				<br /> < br />
		</AnimationOnScroll>

		);
export default function Gallery(){
	return(	<>	<div className="w3-container w3-center  w3-padding-16">
		<h1>GALLERY</h1>
		<br /> < br />
		{gallery}
		</div>
		</>
	);
}