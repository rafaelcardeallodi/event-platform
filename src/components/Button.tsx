import { AnchorHTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  leftIcon?: React.ReactNode;
  variant: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({ leftIcon, variant, children, ...props }: ButtonProps) {
  return (
    <a
      className={classNames(
        "p-4 text-sm flex items-center rounded font-bold uppercase gap-2 justify-center transition-colors",
        {
          "bg-green-500 hover:bg-green-700": variant === "primary",
          "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900":
            variant === "secondary",
        }
      )}
      {...props}
    >
      {leftIcon && leftIcon}
      {children}
    </a>
  );
}
