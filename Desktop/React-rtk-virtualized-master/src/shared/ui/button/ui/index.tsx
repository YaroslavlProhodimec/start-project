import {ReactNode, SyntheticEvent} from "react";


import { Link } from "react-router-dom";

type PropsType = {
    children: ReactNode | string;
    className?: string;
    href?: string;
    type?: "button" | "submit" | "reset" 
    onClickHandler?: (e: SyntheticEvent<HTMLButtonElement>) => void;
}

export const Button  = ({children,className,href,type,onClickHandler}:PropsType) =>
  href ? (
        <Link to={href} className={className}>
            {children}
        </Link>
    ) : (
        <button
            type={type ? type : "button"}
            className={className}
            onClick={onClickHandler}
        >
            {children}
        </button>
    );