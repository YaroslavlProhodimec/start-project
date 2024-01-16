// eslint-disable-next-line prettier/prettier

// @ts-ignore
import React from "react";

import { Button } from "../../../shared/ui/button";

type PropsType = {
    productId: number;
}

const BtnView = (props: PropsType) => {
    return (
        <Button
            className="btn btn-outline-danger"
                href={`/service/${props.productId}`}>
            Просмотр
        </Button>
    );
};

export {BtnView};
