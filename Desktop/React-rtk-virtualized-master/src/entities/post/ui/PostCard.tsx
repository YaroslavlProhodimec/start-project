import { useFetchPostByIdQuery } from "../api/post-api";
import cn from "classnames";
import styles from "./styles.module.scss";
import  {ReactNode} from "react";
import { Preloader } from "../../../shared/ui/preloader";
type PropsType = {
    id: number;
    component?: (id: number) => ReactNode;
}

const  PostCard = ({id,component}: PropsType) => {
    const {isLoading, error, data} = useFetchPostByIdQuery(id.toString())
    const cardData = data || {title: "Loading..", description: ""};

    const maxLength = 79;
    const truncatedTitle = cardData.description.length > maxLength
        ? cardData.description.substring(0, maxLength) + "..."
        : cardData.description;
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
            <p className={styles.descr}>{truncatedTitle}</p>
            {component && (
                <div className={cn({ [styles.btn]: true, disabled: isLoading })}>
                    {component(id)}
                </div>
            )}
            {isLoading && <Preloader className={styles.preloader} />}
        </article>
    )
}
export {PostCard};
