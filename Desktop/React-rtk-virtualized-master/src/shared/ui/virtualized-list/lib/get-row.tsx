import { ReactNode } from "react";

type RenderComponent = (index: number) => ReactNode;

export const getRow = (render: RenderComponent) => {
    const Row = ({ index, style }: any) => {
        return <div style={style}>{render(index)}</div>;
    };

    return Row;
};