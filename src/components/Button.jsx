import React from "react";

/**
 * Button Component
 *
 * @param {Object} props - The component's props.
 * @param {string} props.label - The text to display on the button.
 * @param {string} [props.iconURL] - An optional URL for an icon to display next to the label.
 * @param {string} [props.backgroundColor] - Background color of the button. If not provided, defaults to "bg-btntheme."
 * @param {string} [props.textColor] - Text color of the button. If not provided, defaults to "text-white."
 * @param {string} [props.borderColor] - Border color of the button. If not provided, defaults to "border-btntheme."
 * @param {boolean} [props.fullWidth] - If true, the button stretches to full width.
 * @returns {JSX.Element} - The rendered Button component.
 */

const Button = (props) => {
  const {
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
  } = props;
  return (
    <button
      className={`relative inline-flex items-center px-7 py-4 border text-lg leading-none rounded-full transition-all duration-300 ease-in-out
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-btntheme text-white border-btntheme"
      }
      hover:bg-black hover:text-#D400FF hover:transform hover:scale-105 hover:rotate-3 ${
        fullWidth && "w-full"
      }`}
    >
      {props.children}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5 transform translate-x-2"
        />
      )}
    </button>
  );
};

export default Button;
