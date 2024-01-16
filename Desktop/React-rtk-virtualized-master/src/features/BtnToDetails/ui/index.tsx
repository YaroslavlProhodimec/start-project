import { FC } from "react";

import { Button } from "@src/shared/ui/button";

interface IBtnToPostDetailsProps {
  productId: number;
}

const BtnToPostDetails: FC<IBtnToPostDetailsProps> = (props) => {
  return (
    <Button className="btn btn-secondary" href={`/product/${props.productId}`}>
      Подробнее..
    </Button>
  );
};

export { BtnToPostDetails };
