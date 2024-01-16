import  { ReactNode} from "react";
import {getRow} from "../lib/get-row";
import styles from "./styles.module.scss";
import {getRowSizes} from "../lib/get-row-sizes";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList as List } from "react-window";

type VirtualizedListProps = {
    totalItems: number;
    itemHeight: number;
    listHeight: number;
    listWidth?: string;
    renderComponent: (index: number) => ReactNode;
}

const VirtualizedList = ({
                             totalItems,
                             itemHeight,
                             listHeight,
                             listWidth,
                             renderComponent,
                         }: VirtualizedListProps) => {

    const {getItemSize} = getRowSizes(totalItems, itemHeight);

    return (
        <AutoSizer style={{display: "contents"}}>
            {() => {
                return (
                    <List
                        className={styles.virt}
                        height={listHeight}
                        itemCount={totalItems}
                        itemSize={getItemSize}
                        width={listWidth || "100%"}
                    >
                        {getRow(renderComponent)}
                    </List>
                );
            }}
        </AutoSizer>
    );
};

export {VirtualizedList};
