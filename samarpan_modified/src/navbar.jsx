import render_notification from "./render_noti.js";
import announce from "./announcements_gif.gif";
import render_invitation from "./render_invitation.js";
import render_winners from "./render_winners.js";
import render_event from "./render_event.js";
import render_home from "./render_home.js";
import render_registration from "./render_registration.js";
import render_gallery from "./render_gallery.js";
import React from 'react';
import './navbar.css'
import Logo from './cbit.jpeg'
// export function close(){
//   document.getElementById("modal").style.display="none";
// }
// export function open(){
//   document.getElementById("modal").style.display="block";
// }
const Navbar = () => {
  return (
    <>
    {/* <div className="w3-modal w3-center w3-animate-zoom" id="modal" >
    <h1 className="modal-content w3-jumbo w3-right w3-button w3-border w3-border-blue  w3-ripple" onClick={close}>&times;</h1>
      <h1 className="w3-hover-text-orange w3-ripple" onClick={render_home}>HOME</h1>
      <h1 className="w3-hover-text-orange w3-ripple">ABOUT</h1>
              <h1 className="w3-hover-text-orange w3-ripple" onClick={render_invitation}>INVITATION</h1>
        <h1 className="w3-hover-text-orange w3-ripple" onClick={render_registration}>EVENTS</h1>
        <h1 className="w3-hover-text-orange w3-ripple">Events Rules and Regulations</h1>
        <h1 className="w3-hover-text-orange w3-ripple" >REGISTRATIONS</h1>
        <h1 className="w3-hover-text-orange w3-ripple" onClick={render_winners}>WINNERS</h1>
        <h1 className="w3-hover-text-orange w3-ripple" onClick={render_gallery}>GALLERY</h1>
    </div> */}
    <div className="w3-xlarge w3-container " id="nav" style={{margin:"auto"}} >
    <img className="w3-small w3-left"  src={Logo} alt="Logo"  />
    {/* <button className="w3-right w3-button w3-border w3-border-red w3-hover-blue " onClick={open}>
    <i className="material-icons ">menu</i></button> */}
    <div className=" w3-center w3-hide-small w3-serif"><h2 className="w3-serif cbit">C BYREGOWDA INSTITUTE OF TECHNOLOGY</h2>
    <p id="samarpan" className="">Samarpan-2023</p></div>
    <div className=" w3-center w3-hide-large w3-hide-medium "><h1>CBIT</h1><p id="sama" className="">Samarpan-2023</p></div>
    <div> <marquee onClick={render_notification} ><img  className="w3-small w3-image" width={"40px"} src={announce}/>Notifications</marquee></div>

    <div className="navflex w3-hide-small  "><p className="w3-bar-item w3-btn  " onClick={render_home}>HOME</p><p className="w3-bar-item w3-btn " onClick={render_invitation}>INVITATION</p><p className="w3-bar-item w3-btn" onClick={render_registration}>EVENTS</p><p className="w3-bar-item w3-btn" onClick={render_winners}>WINNERS</p><p className="w3-bar-item w3-btn" onClick={render_gallery}>GALLERY</p></div>
    <div className="mobile-navflex w3-hide-large w3-hide-medium  "><p className="w3-bar-item w3-btn  " onClick={render_home}>HOME</p><p className="w3-bar-item w3-btn " onClick={render_invitation}>INVITATION</p><p className="w3-bar-item w3-btn" onClick={render_registration} onClick={render_registration}>EVENTS</p><p className="w3-bar-item w3-btn" onClick={render_winners}>WINNERS</p><p className="w3-bar-item w3-btn" onClick={render_gallery}>GALLERY</p></div>
    
    
    </div>
    </>
  );
}

export default Navbar;


        //<img src={Logo} alt="Logo"  />
        //<h4>C BYREGOWDA INSTITUTE OF TECHNOLOGY</h4>
      //<ul className="links">
      //<li className="w3-hover-text-orange w3-ripple" onClick={render_home}>Home</li>
      //<li className="w3-hover-text-orange w3-ripple">About</li>
          //    <li className="w3-hover-text-orange w3-ripple" onClick={render_invitation}>INVITATION</li>
        //<li className="w3-hover-text-orange w3-ripple" onClick={render_event}>Events</li>
        //<li className="w3-hover-text-orange w3-ripple">Events Rules and Regulations</li>
        //<li className="w3-hover-text-orange w3-ripple" onClick={render_registration}>Registration</li>
        //<li className="w3-hover-text-orange w3-ripple" onClick={render_winners}>Winners</li>
        //<li className="w3-hover-text-orange w3-ripple" onClick={render_gallery}>Gallery</li>
      //</ul>