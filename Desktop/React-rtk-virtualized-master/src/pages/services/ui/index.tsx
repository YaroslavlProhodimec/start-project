import { Header } from "../../../widgets/hearder";
// @ts-ignore
import React from "react";
import { Posts } from "../../../widgets/posts/ui";

export const ServicePage = () => {
    return (
        <>
            <main className="container py-4">
                <Header/>
                <Posts/>
            </main>

        </>
    );
};
