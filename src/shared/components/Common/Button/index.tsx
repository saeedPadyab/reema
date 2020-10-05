import React from "react";
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  primaryOutline?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  children,
  primary,
  primaryOutline,
  className,
  ...rest
}) => {
  return (
    <button
      className={
        "hover:shadow-lg font-bold py-3 px-4 rounded " +
        (primary ? "bg-primary-dark-color text-white " : "") +
        (primaryOutline
          ? "border border-primary-dark-color bg-white text-primary-dark-color "
          : "") +
        (className ? className : "")
      }
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
