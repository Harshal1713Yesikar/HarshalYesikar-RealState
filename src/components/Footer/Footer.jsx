import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">

      
      <div className="paddings innerWidth flexCenter f-container">
        
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4JARB39VxNN0kSohWe5rUoTuwJ3yNPUvVMg&usqp=CAU" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
