import React from "react";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1 style={{ zIndex: "999999" }}>
        <img
          src='http://s3.amazonaws.com/dfc_attachments/images/3283575/FreshStartLogo1_web.jpg'
          alt=''
          className='round-img'
          style={{ width: "75px", height: "75px" }}
        />
        Fresh Start Qualification Questionaire
      </h1>
    </nav>
  );
};

export default Navbar;
