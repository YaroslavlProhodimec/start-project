import { FC, ReactElement } from "react";

import "@shared/styles/globals.scss";
import { ErrorBoundary } from "@shared/ui/error-boundary";
import { Router } from "@src/pages";
import { Provider } from "react-redux";

import { store } from "./store";
import "./styles/index.scss";

const App: FC = (): ReactElement => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </Provider>
  );
};

export { App };
