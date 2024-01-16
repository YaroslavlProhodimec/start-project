import { IProductDto } from "../api/types";
import { IPost } from "../model/types";

const mapPost = (dto: IProductDto): IPost => ({
  id: dto.id,
  title: dto.title,
  description: dto.description,
});

export { mapPost };
