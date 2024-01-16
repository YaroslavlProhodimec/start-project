import { FC, PropsWithChildren, ReactNode, SyntheticEvent } from "react";

import { Link } from "react-router-dom";

interface IButton extends PropsWithChildren {
  children: ReactNode | string;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClickHandler?: (e: SyntheticEvent<HTMLButtonElement>) => void;
}

export const Button: FC<IButton> = (props) =>
  props.href ? (
    <Link to={props.href} className={props.className}>
      {props.children}
    </Link>
  ) : (
    <button
      type={props.type ? props.type : "button"}
      className={props.className}
      onClick={props.onClickHandler}
    >
      {props.children}
    </button>
  );
