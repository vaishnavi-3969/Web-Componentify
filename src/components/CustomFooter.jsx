import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

/**
 * Footer Component
 *
 * @param {Object} props - The component's props.
 * @param {string} [props.backgroundColor] - Background color of the footer. If not provided, defaults to "bg-gray-900."
 * @param {string} [props.navlinkHoverColor] - Hover color for social icons. If not provided, defaults to "hover:text-blue-500."
 * @param {string} [props.logoUrl] - URL for the logo image. If provided, displays the logo image; otherwise, displays the default text-based logo.
 * @returns {JSX.Element} - The rendered Footer component.
 */
const Footer = ({ backgroundColor, navlinkHoverColor, logoUrl }) => {
  // Get the current year for copyright
  const currentYear = new Date().getFullYear();

  // Style for the footer's background color
  const footerStyle = {
    backgroundColor: backgroundColor || "bg-gray-900", // Default background color
  };

  // Style for social icons' hover color
  const navlinkStyle = {
    hoverColor: navlinkHoverColor || "hover:text-blue-500", // Default navlinks hover color
  };

  return (
    <footer className={`text-white py-8 p-4 ${footerStyle.backgroundColor}`}>
      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between">
        {/* Logo or Site Name */}
        <div className="text-2xl font-semibold mb-4 md:mb-0 text-center">
          {logoUrl ? (
            <a href={logoUrl}>
              <img src={logoUrl} alt="Logo" className="h-10 w-10" />{" "}
              {/* Adjust image size as needed */}
            </a>
          ) : (
            "Brand Logo" // Default text-based logo
          )}
        </div>

        {/* Social Icons */}
        <div className="mb-4 md:mb-0 flex items-center justify-center space-x-6">
          {/* Facebook Icon */}
          <span className={`text-3xl mx-2 ${navlinkStyle.hoverColor}`}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </span>

          {/* Twitter Icon */}
          <span className={`text-3xl mx-2 ${navlinkStyle.hoverColor}`}>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </span>

          {/* Instagram Icon */}
          <span className={`text-3xl mx-2 ${navlinkStyle.hoverColor}`}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </span>

          {/* LinkedIn Icon */}
          <span className={`text-3xl mx-2 ${navlinkStyle.hoverColor}`}>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </span>
        </div>

        {/* Copyright and Year */}
        <div className="text-center">
          <p className="text-sm">
            &copy; {currentYear} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
