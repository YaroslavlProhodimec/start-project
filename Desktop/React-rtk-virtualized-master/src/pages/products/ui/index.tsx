import { PAGE_NAMES } from "@shared/config";
import { PageMeta } from "@shared/ui/page-meta";
import { Header } from "@widgets/header";
import { Posts } from "@widgets/posts";

export const ProductsPage = () => {
  return (
    <>
      <PageMeta title={PAGE_NAMES.HOME} />
      <Header />
      <main className="container py-4">
        <Posts />
      </main>
    </>
  );
};
