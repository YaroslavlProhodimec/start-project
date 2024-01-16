import { FC, ReactElement } from "react";

import NotFoundIcon from "@shared/assets/icons/404.svg";
import { NOT_FOUND_TEXT, PAGE_NAMES } from "@shared/config";
import { Button } from "@shared/ui/button";
import { PageMeta } from "@shared/ui/page-meta";
import { Header } from "@src/widgets/header";

const NotFound: FC = (): ReactElement => (
  <div className="d-flex flex-column h-100 justify-center">
    <PageMeta title={PAGE_NAMES.PAGE_NOT_FOUND} />
    <Header />
    <main className="container text-center py-4 h-100 d-flex flex-column justify-content-center">
      <div className="row">
        <div className="col-md-12">
          <NotFoundIcon />
          <h1 className="mt-4">{NOT_FOUND_TEXT}</h1>
          <p>Извините, такой страницы не существует.</p>
          <Button href="/" className="btn btn-primary">
            Вернуться на главную
          </Button>
        </div>
      </div>
    </main>
  </div>
);

export { NotFound };
