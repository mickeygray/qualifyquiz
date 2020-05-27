import React from "react";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary' style={{ zIndex: "999999" }}>
      <ul style={{ listStyle: "none" }}>
        <li>
          <img
            src='http://s3.amazonaws.com/dfc_attachments/images/3283575/FreshStartLogo1_web.jpg'
            alt=''
            className='round-img'
            style={{ width: "75px", height: "75px" }}
          />
        </li>
        <li>
          <h1>
            <br />
            Fresh Start Qualification Questionaire
          </h1>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
