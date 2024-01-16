import { FC } from "react";

import { PostCard, useGetPostsQuery } from "@entities/post";
import { VirtualizedList } from "@shared/ui/virtualized-list";
import { BtnToPostDetails } from "@src/features";

import styles from "./styles.module.scss";
import { ITEM_HEIGTH, LIST_HEIGHT } from "../config/virtualized-list-config";

const Posts: FC = () => {
  const { data } = useGetPostsQuery("0");

  return (
    <section className={styles.expand}>
      {data && (
        <VirtualizedList
          totalItems={data?.total || 0}
          listHeight={LIST_HEIGHT}
          itemHeight={ITEM_HEIGTH}
          renderComponent={(index) => {
            const currentId = index + 1;
            return (
              <PostCard
                id={currentId}
                bottomSlot={() => <BtnToPostDetails productId={currentId} />}
              />
            );
          }}
        />
      )}
    </section>
  );
};

export { Posts };
