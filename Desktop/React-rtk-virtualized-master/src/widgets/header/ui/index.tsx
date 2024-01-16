import { FC } from "react";

import ReactSvg from "@shared/assets/icons/react.svg";
import { Button } from "@shared/ui/button";

const Header: FC = () => {
  return (
    <header className="bg-dark text-white">
      <div className="container d-flex align-items-center">
        <nav className="navbar">
          <Button className="navbar-brand text-white" href="/">
            <ReactSvg />
          </Button>
        </nav>
        <h1 className="d-flex m-0 fs-3">Virtualized List + RTK Query</h1>
      </div>
    </header>
  );
};

export { Header };
