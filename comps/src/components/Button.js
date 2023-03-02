import propTypes from "prop-types";
import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  // console.log(rest);
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 m-2 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-blue-900 bg-blue-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-500 bg-yellow-500 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      // "bg-white ": outline,kinsa
      "rounded-full": rounded,
      "text-blue-500": outline && primary,
      "text-gray-500": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    // console.log(props);

    if (count > 1) {
      return new Error("Invalid Props");
    }
  },
};

export default Button;
