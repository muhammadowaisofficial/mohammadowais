import React, { AnchorHTMLAttributes, FC, forwardRef } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: "White" | "Green" | "Dark";
}

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ variant, className, children, ...props }, ref) => {
    return (
      <div
        className={` w-fit rounded-md border  hover:delay-700  ${
          variant === "Green"
            ? "border-darkblue bg-caribbeangreen hover:bg-darkblue"
            : null
        } ${
          variant === "Dark"
            ? "border-caribbeangreen bg-darkblue hover:bg-caribbeangreen"
            : null
        } ${
          variant === "White"
            ? "border-darkblue bg-white hover:bg-darkblue"
            : null
        }`}
      >
        <a
          className={`collision whitespace-nowrap relative z-0 block w-fit cursor-pointer overflow-hidden px-[30px] py-[10px] text-center font-medium leading-[24px]  before:absolute before:-left-[20px] before:top-[50%] before:-z-[1] before:h-[20px] before:w-[20px] before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full  after:absolute after:-right-[20px] after:top-[50%] after:-z-[9] after:h-[20px] after:w-[20px] after:-translate-y-2/4 after:rounded-full  before:hover:animate-move-left  after:hover:animate-move-right 
          ${
            variant === "Green"
              ? "text-white before:bg-darkblue after:bg-darkblue"
              : null
          } ${
            variant === "Dark"
              ? "text-white before:bg-caribbeangreen after:bg-caribbeangreen"
              : null
          } ${
            variant === "White"
              ? "text-darkblue hover:text-white hover:delay-3000 before:bg-darkblue after:bg-darkblue"
              : null
          }
          `}
          ref={ref}
          {...props}
        >
          {children}
        </a>
      </div>
    );
  }
);

Button.displayName = "Button";

export default Button;