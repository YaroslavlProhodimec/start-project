import { FC } from "react";

import { IProductDto } from "@entities/post/api/types";

interface IPostDetailsProps {
  product: IProductDto;
}

const PostDetails: FC<IPostDetailsProps> = (props) => {
  const {
    brand = "Brand",
    description = "No description",
    id,
    discountPercentage = 0,
    images = [],
    price = 0,
    rating = 0,
    stock = 0,
    thumbnail = "",
    title = "Title",
  } = props.product;

  return (
    <section>
      <div className="row">
        <div className="col-md-6">
          <img src={thumbnail} alt="Product Thumbnail" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <span>Article:{id}</span>
          <h2 className="mb-4">{title}</h2>
          <p>{description}</p>
          <p>Price: ${price}</p>
          <p>Discount: {discountPercentage}%</p>
          <p>Rating: {rating}</p>
          <p>In Stock: {stock}</p>
          <p>Brand: {brand}</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <h3>Product Images</h3>
          <div className="row">
            {images.length &&
              images.map((src, index) => (
                <div className="col-md-3 mb-3" key={index}>
                  <img src={src} alt="" className="img-fluid" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { PostDetails };
