import React from "react";

/**
 * Button Component
 *
 * @param {Object} props - The component's props.
 * @param {ReactNode} children - The text to display on the button is passed as children.
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
      className={`relative inline-flex items-center rounded-full border px-7 py-4 text-lg leading-none transition-all duration-300 ease-in-out
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : 'bg-btntheme border-btntheme text-white'
      }
      hover:text-D400FF hover:rotate-3 hover:scale-105 hover:transform hover:bg-black ${
        fullWidth ? 'w-full' : ''
      }`}
    >
      {props.children}
      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 h-5 w-5 translate-x-2 transform rounded-full bg-white'
        />
      )}
    </button>
  );
};

export default Button;