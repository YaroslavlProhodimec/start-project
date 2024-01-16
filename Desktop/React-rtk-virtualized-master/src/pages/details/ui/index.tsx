import { useGetPostByIdQuery } from "@entities/post/api/post-api";
import { PAGE_NAMES } from "@shared/config";
import { PageMeta } from "@shared/ui/page-meta";
import { Button } from "@src/shared/ui/button";
import { Header } from "@widgets/header";
import { PostDetails } from "@widgets/postDetails";
import { useParams, useNavigate } from "react-router-dom";

export const ProductDetailedPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { isLoading, error, data } = useGetPostByIdQuery(
    productId ? productId.toString() : ""
  );

  if (error) {
    navigate("/404");
  }

  return (
    <>
      <PageMeta title={PAGE_NAMES.PRODUCT} />
      <Header />
      <main className="container py-4 d-flex flex-column">
        {isLoading ? <h2>Loading...</h2> : ""}

        {data && <PostDetails product={data} />}
        <Button className="btn btn-secondary align-self-end" href="/">
          Back to main
        </Button>
      </main>
    </>
  );
};
