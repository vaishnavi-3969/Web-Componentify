import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_main">
      <div className="footer_container">
        <div className="footer_brand mt">
          <p className="h4">YourBrand</p>
          <p className="body3">
            The majority of our global workforce of 600,000+ is made up of our
            guards. It is a high profile service and is the made
          </p>
        </div>

        <div className="pages  mt">
          <p className="h3">Pages</p>
          <p className="body3">
            <a href="/">Home</a>
          </p>

          <a href="/">
            <p className="body3">About </p>
          </a>
          <a href="/">
            <p className="body3">Contact </p>
          </a>
          <a href="/">
            <p className="body3">Cakes </p>
          </a>
        </div>
        <div className="pages mt">
          <p className="h3">Quick Links</p>
          <p className="body3">
            <a href="/">DashBoard</a>
          </p>

          <a href="/">
            <p className="body3">Privacy Policy </p>
          </a>
          <a href="/">
            <p className="body3">Terms & Condtions </p>
          </a>
          <a href="/">
            <p className="body3">FAQ </p>
          </a>
        </div>
        <div className="pages mt">
          <p className="h3">Social Media</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
