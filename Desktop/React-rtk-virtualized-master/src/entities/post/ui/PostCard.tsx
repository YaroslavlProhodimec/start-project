import { FC, ReactNode } from "react";

import { Preloader } from "@src/shared/ui/preloader";
import cn from "classnames";

import styles from "./styles.module.scss";
import { useGetPostByIdQuery } from "../api/post-api";

interface PostCardProps {
  id: number;
  bottomSlot?: (id: PostCardProps["id"]) => ReactNode;
}

const PostCard: FC<PostCardProps> = ({ id, bottomSlot }) => {
  const { isLoading, error, data } = useGetPostByIdQuery(id.toString());

  const cardData = data || { title: "Loading..", description: "" };

  return (
    <article
      className={cn({
        [styles.mycard]: true,
        [styles.loading]: isLoading,
        error: Boolean(error),
      })}
    >
      <h3 className={styles.title}>{cardData.title}</h3>
      <span className={styles.number}>{id}.</span>
      <p className={styles.descr}> {cardData.description}</p>
      {bottomSlot && (
        <div className={cn({ [styles.btn]: true, disabled: isLoading })}>
          {bottomSlot(id)}
        </div>
      )}
      {isLoading && <Preloader className={styles.preloader} />}
    </article>
  );
};

export { PostCard };
