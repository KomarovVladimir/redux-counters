import { Box, Button } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";

import { Counter } from "./components";
import { addCounter } from "./components/Counter/counterSlice";
import { useAppSelector, useAppDispatch } from "./app/hooks";

function App() {
  const dispatch = useAppDispatch();
  const counters = useAppSelector((state) => state.counter.counters);

  const handleAddCounter = () => {
    dispatch(addCounter(nanoid()));
  };

  return (
    <Box
      sx={{
        display: "grid",
        rowGap: 3,
        justifyItems: "start",
        maxWidth: 1440,
      }}
    >
      <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={handleAddCounter}
      >
        Add counter
      </Button>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 2,
          width: "100%",
        }}
      >
        {Object.keys(counters).map((id, key: number) =>
          (key + 1) % 4 === 0 ? (
            <Counter {...{ key, id }} automatic />
          ) : (
            <Counter {...{ key, id }} />
          )
        )}
      </Box>
    </Box>
  );
}

export default App;
