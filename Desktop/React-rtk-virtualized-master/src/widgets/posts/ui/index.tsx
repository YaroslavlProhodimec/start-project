// @ts-ignore
import React, { FC } from "react";
import styles from "./styles.module.scss";
import { ITEM_HEIGTH, LIST_HEIGHT } from "../config/virtualized-list-config";
import { PostCard, useFetchAllPostsQuery } from "../../../entities/post";
import { VirtualizedList } from "../../../shared/ui/virtualized-list";
import { BtnView } from "../../../features";

const Posts: FC = () => {
    document.title = "Harmony Oasis Center Clinic - Медицинский Центр Оазис Гармонии";

    const { data } = useFetchAllPostsQuery("0");

    return (
        <section className={styles.expand}>
            {data && (

                <VirtualizedList
                    totalItems={17
                    // data?.total
                        || 0}
                    listHeight={LIST_HEIGHT}
                    itemHeight={ITEM_HEIGTH}
                    renderComponent={(index) => {
                        const currentId = index + 1;
                        return (
                            <PostCard
                                id={currentId}
                                component={() => <BtnView productId={currentId} />}
                            />
                        );
                    }}
                />
            )}
        </section>
    );
};

export { Posts };
