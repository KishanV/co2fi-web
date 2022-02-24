import styles from "./index.module.scss";
import { ButtonProps } from "../../utils";

export const Button = ({
  children,
  variant,
  ...props
}: ButtonProps & {
  variant?: "primary" | "secondary" | "light";
}) => {
  if (variant === "primary") {
    return (
      <div className="relative p-2 z-0">
        <button
          {...props}
          className={`${
            styles.light
          } flex flex-auto basis-0items-center justify-center pl-10 pr-10 cursor-pointer  font-medium  text-18 lh-18 ${
            props.className || ""
          }`}
        >
          {children}
        </button>
      </div>
    );
  } else {
    return (
      <div className="relative p-2 z-0">
        <button
          {...props}
          className={`${styles.Button} ${
            styles[variant || "primary"]
          } flex flex-auto   items-center justify-center pt-6 pb-8 cursor-pointer font-semibold  bg-blue-600 mb-4 text-18 lh-18 gap-4 ${
            props.className || ""
          }`}
        >
          {children}
        </button>
      </div>
    );
  }
};
