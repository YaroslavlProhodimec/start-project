import styles from "./styles.module.scss";

import { useParams } from "react-router-dom";

// @ts-ignore
import React from "react";
import { Preloader } from "../../../shared/ui/preloader";
import { Service } from "../../../widgets/postDetails/ui";
import { useFetchPostByIdQuery } from "../../../entities/post/api/post-api";
export const SelectedServicePage = () => {
    const {serviceId} = useParams();


    const {isLoading, data} = useFetchPostByIdQuery(
        serviceId ? serviceId.toString() : ""
    );


    return (
        <>
            <main className={styles.centeredContainer}>
                {isLoading ? <h2><Preloader/></h2> : ""}
                {data && <Service post={data}/>}

            </main>
        </>
    );
};
