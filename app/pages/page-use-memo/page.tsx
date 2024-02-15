"use client";

import { Button, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { initialItems } from "../utils/utils";

const PageUseMemo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );

  return (
    <>
      <Typography variant="h5">Count: {count}</Typography>
      <Typography variant="h5">Selected item: {selectedItem?.id}</Typography>
      <Button
        variant="contained"
        sx={{ mr: 2 }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </Button>
    </>
  );
};

export default PageUseMemo;
