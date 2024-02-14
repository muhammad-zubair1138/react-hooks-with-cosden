"use client";

import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

const PageUseState = () => {
  const [count, setCount] = useState(0);

  const IncrementHandler = () => {
    return setCount(count + 1);
  };

  const DecrementHandler = () => {
    return setCount(count - 1);
  };

  return (
    <>
      <Typography variant="h5">Count: {count}</Typography>
      <Button
        variant="contained"
        sx={{ mr: 2 }}
        onClick={() => {
          IncrementHandler();
        }}
      >
        Increment
      </Button>
      <Button
        variant="contained"
        sx={{ mr: 2 }}
        onClick={() => {
          DecrementHandler();
        }}
      >
        Decrement
      </Button>
    </>
  );
};

export default PageUseState;
