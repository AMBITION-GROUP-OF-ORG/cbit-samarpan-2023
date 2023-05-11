import invitation from "./invitation.jpeg";
export default function Invitation(){
	return( 
		<div className="w3-conatiner w3-card w3-centered w3-center">
		<br /> < br />
		<img src={invitation} className="w3-image w3-resposive w3-centered w3-center" alt="loading" style={{alignItems:"center"}}/>

		</div>
		);
}