import React, { useState } from "react";
import styled from "styled-components";
import { ReactSortable } from "../../src";
import { Item, threes2 } from "../util";

// Sortable.mount(new Swap());

export function SwapExample2() {
  const [list, setList] = useState(threes2);
  function onChange(ds:any) {
    console.log(ds);
    setList(ds);
  }
  return (
    <ReactSortable swap list={list} setList={onChange} animation={150}>
      {list.map(item => (
        <SwapItem key={item.id}>{item.name}</SwapItem>
      ))}
    </ReactSortable>
  );
}

const SwapItem = styled(Item)`
  &.sortable-swap-highlight {
    background-color: #fa0a;
  }
`;
