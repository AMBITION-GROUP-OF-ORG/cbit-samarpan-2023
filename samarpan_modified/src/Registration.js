import render_pencil from "./render_pencil.js";
import render_treasure from "./render_treasure.js";
export default function Registration(){
	return (<>
		<div className="w3-container w3-center  w3-padding-64" >
			<div className="w3-panel w3-left  w3-text-purple"><h3>For events rules and regulations click on events</h3></div>
			<table className="w3-table-all w3-center-align" style={{fontStyle:"oblique"}}>
				<tbody>
				<tr>

					<th className="w3-center">sl.no</th>
					<th className="w3-center">TIME</th>
					<th className="w3-center">DATE</th>
					<th className=" w3-center ">EVENT NAME</th>
					<th className="w3-center">REGISTER</th>
					<th className="w3-center">Faculty Incharge </th>
					</tr>
				<tr className="w3-center">
				<td className="w3-center">1</td>
				<td className="w3-center">11:30-12:30 PM</td>
					<td className="w3-center">15/05/2023</td>
					<td className="w3-left w3-hover-purple w3-btn" onClick={render_pencil}>Pencil sketching & painting</td>
					<td ><button className="w3-btn w3-border w3-hover-deep-purple w3-round ">Register Here</button> </td>
					<td >Prof Monish N V (CV) </td>
					</tr>
					<tr>

				<td className="w3-center"></td>
				<td className="w3-center">2:00-4:00 PM</td>
					<td className="w3-center">15/05/2023</td>
					<td className="w3-left w3-hover-purple w3-btn" onClick={render_treasure}>Treasure hunt</td>
					<td ><button className="w3-btn w3-border w3-hover-deep-purple w3-round ">Register Here</button> </td>
					<td >Prof Chowda Reddy C (ME) </td>
					</tr>
					<tr className="w3-center">
				<td className="w3-center">2</td>
				<td className="w3-center">11:30-12:30 PM</td>
					<td className="w3-center">16/05/2023</td>
					<td className="w3-left w3-hover-purple w3-btn"><a href="https://docs.google.com/forms/d/e/1FAIpQLSf90_pWpXJNiQFKob5LZvcUvarFPLUsG-ElsOWm3YsQQfnmLQ/viewform?usp=sf_link">Essay Writing & Pick and Speak</a></td>
					<td ><button className="w3-btn w3-border w3-hover-deep-purple w3-round ">Register Here</button> </td>
					<td >Prof Eashwara M (EC) </td>
					</tr>
					<tr>
				<td className="w3-center"></td>
				<td className="w3-center">2:00-4:00 PM</td>
					<td className="w3-center">16/05/2023</td>
					<td className="w3-left w3-hover-purple w3-btn">Cooking without fire</td>
					<td ><button className="w3-btn w3-border w3-hover-deep-purple w3-round ">Register Here</button> </td>
					<td >Prof Manjunath Singh (CSE) </td>
					</tr>

					<tr className="w3-center">
				<td className="w3-center">3</td>
				<td className="w3-center">11:30-12:30 PM</td>
					<td className="w3-center">17/05/2023</td>
					<td className="w3-left w3-hover-purple w3-btn"><a href="https://drive.google.com/file/d/1b7NhNTgnOcL5zTW3Cw6HdiInXVJRQlz8/view?usp=sharing">Debate</a></td>
					<td ><button className="w3-btn w3-border w3-hover-deep-purple w3-round ">Register Here</button> </td>
					<td >Prof Ramesh (Phy) </td>
					</tr>
					<tr>
				<td className="w3-center"></td>
				<td className="w3-center">2:00-4:00 PM</td>
					<td className="w3-center">17/05/2023</td>
					<td className="w3-left w3-hover-purple w3-btn">Quiz</td>
					<td ><button className="w3-btn w3-border w3-hover-deep-purple w3-round ">Register Here</button> </td>
					<td >Dr Deepika Lokesh (CSE) </td>
					</tr>

					<tr className="w3-center">
				<td className="w3-center">4</td>
				<td className="w3-center">11:30-12:30 PM</td>
					<td className="w3-center">18/05/2023</td>
					<td className="w3-left w3-hover-purple w3-btn"><a href="https://docs.google.com/document/d/13OWgfMvSX6t0ckwQ7kyNrCna3z-Z7K39/edit?usp=sharing&ouid=108538715293005607808&rtpof=true&sd=true">Dance</a></td>
					<td ><button className="w3-btn w3-border w3-hover-deep-purple w3-round "><a href="https://forms.gle/YHnMPSvZAFtCtLxXA">Register Here</a>a</button> </td>
					<td >Prof Sujani G (ECE) </td>
					</tr>
					<tr>
				<td className="w3-center"></td>
				<td className="w3-center">2:00-4:00 PM</td>
					<td className="w3-center">18/05/2023</td>
					<td className="w3-left w3-hover-purple w3-btn">Dumb-Sharades</td>
					<td ><button className="w3-btn w3-border w3-hover-deep-purple w3-round ">Register Here</button> </td>
					<td >Prof Vedavathi RP (CV) </td>
					</tr>

					<tr className="w3-center">
				<td className="w3-center">5</td>
				<td className="w3-center">11:30-12:30 PM</td>
					<td className="w3-center">19/05/2023</td>
					<td className="w3-left w3-hover-purple w3-btn">Singing</td>
					<td ><button className="w3-btn w3-border w3-hover-deep-purple w3-round ">Register Here</button> </td>
					<td >Prof Kavitha N (CSE ) </td>
					</tr>
					<tr>
				<td className="w3-center"></td>
				<td className="w3-center">2:00-4:00 PM</td>
					<td className="w3-center">19/05/2023</td>
					<td className="w3-left w3-hover-purple w3-btn">Skit</td>
					<td ><button className="w3-btn w3-border w3-hover-deep-purple w3-round ">Register Here</button> </td>
					<td >Dr Ethiraj J (Chem) </td>
					</tr>

					<tr className="w3-center">
				<td className="w3-center">6</td>
				<td className="w3-center">10:00-1:00 PM</td>
					<td className="w3-center">20/05/2023</td>
					<td className="w3-left w3-hover-purple w3-btn">Cultural Screening</td>
					<td ><button className="w3-btn w3-border w3-hover-deep-purple w3-round ">Register Here</button> </td>
					<td >Prof Eashwara M (ECE) </td>
					</tr>
					<tr>
				<td className="w3-center"></td>
				<td className="w3-center">2:00-4:00 PM</td>
					<td className="w3-center">20/05/2023</td>
					<td className="w3-left w3-hover-purple w3-btn">Anchoring Screening</td>
					<td ><button className="w3-btn w3-border w3-hover-deep-purple w3-round ">Register Here</button> </td>
					<td >Prof kavya S (ECE) </td>
					</tr>

					<tr className="w3-center">
				<td className="w3-center">7</td>
				<td className="w3-center">11:00-12:30 PM</td>
					<td className="w3-center">22/05/2023</td>
					<td className="w3-left w3-hover-purple w3-btn">Rangoli</td>
					<td ><button className="w3-btn w3-border w3-hover-deep-purple w3-round ">Register Here</button> </td>
					<td >Prof Chaitra NS (Math) </td>
					</tr>
					<tr>
				<td className="w3-center"></td>
				<td className="w3-center">2:00-4:00 PM</td>
					<td className="w3-center">22/05/2023</td>
					<td className="w3-left w3-hover-purple w3-btn">Mehendi</td>
					<td ><button className="w3-btn w3-border w3-hover-deep-purple w3-round "><a href="https://docs.google.com/forms/d/e/1FAIpQLSd0Il3WzysMJbf55RPixpaKyD7jTXGiojPQZuVISU3tcw9T0Q/viewform?usp=pp_url">Register Here</a></button> </td>
					<td >Prof Ayesha Sana (CSE) </td>
					</tr>

					<tr className="w3-center">
				<td className="w3-center">8</td>
				<td className="w3-center">6:30-7:30 PM</td>
					<td className="w3-center">23/05/2023</td>
					<td className="w3-left w3-hover-purple w3-btn">FASHION SHOW</td>
					<td ><button className="w3-btn w3-border w3-hover-deep-purple w3-round ">Register Here</button> </td>
					<td ><ul>
						<ol>Prof Kavya S (ECE</ol>
						
						<ol>Prof Sumarani H (CSE)</ol>
						<ol>Prof Sandeep SN (ME)</ol>
						<ol> Prof Smitha R (CV)</ol>
						</ul> </td>
					</tr>
					</tbody>


</table>
			</div>
		</>);
}