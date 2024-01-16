import { FC, ReactNode } from "react";

import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList as List } from "react-window";

import { getRow } from "./../lib/get-row";
import styles from "./styles.module.scss";
import { getRowSizes } from "../lib/get-row-sizes";

interface VirtualizedListProps {
  totalItems: number;
  itemHeight: number;
  listHeight: number;
  listWidth?: string;
  renderComponent: (index: number) => ReactNode;
}

const VirtualizedList: FC<VirtualizedListProps> = ({
  totalItems,
  itemHeight,
  listHeight,
  listWidth,
  renderComponent,
}) => {
  const { getItemSize } = getRowSizes(totalItems, itemHeight);

  return (
    <AutoSizer style={{ display: "contents" }}>
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

export { VirtualizedList };
