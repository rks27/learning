import React, { useState } from "react";
import "../App.css";
import { Button, Flex } from "@fluentui/react";
import { IStackItem } from "./Interfaces";
import { StackItems } from "./Execute";

const Stack: React.FC<any> = (prop: any) => {
  const [stackItems, setStackItems] = useState(prop.stackItems);

  const listItems = stackItems.map((item: IStackItem) => (
    <div>
      <Button>{item.message}</Button>
    </div>
  ));
  return (
    <Flex column hAlign="center" vAlign="end" className="stack-div">
      {listItems}
      <Button
        onClick={() => {
          for (let index = 0; index < StackItems.length; index++) {
            setTimeout(() => {
              setStackItems(StackItems);
              //setStackItems(getStackItem(index));
            }, index * 1000);
          }
        }}
      >
        {" "}
        StackAction{" "}
      </Button>
    </Flex>
  );
};

export default Stack;
