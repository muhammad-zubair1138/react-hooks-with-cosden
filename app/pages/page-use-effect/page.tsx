"use client";

import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const PageUseEffect = () => {
  const [count, setCount] = useState(0);

  const IncrementHandler = () => {
    return setCount(count + 1);
  };

  const DecrementHandler = () => {
    return setCount(count - 1);
  };

  useEffect(() => {
    // the code we want to run
    console.log("The count is:", count);

    //optional return function
    return () => {
      console.log("I am being leaned up!");
    };
  }, [count]); // the dependency array

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

export default PageUseEffect;
