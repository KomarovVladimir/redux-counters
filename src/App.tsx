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
    <Box>
      <Button color="primary" variant="contained" onClick={handleAddCounter}>
        Add counter
      </Button>
      {Object.keys(counters).map((id, key: number) =>
        (key + 1) % 4 === 0 ? (
          <Counter {...{ key, id }} automatic />
        ) : (
          <Counter {...{ key, id }} />
        )
      )}
    </Box>
  );
}

export default App;
