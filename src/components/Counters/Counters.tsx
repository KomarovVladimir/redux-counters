import { Counter } from "../Counter/Counter";
import { increment, decrement } from "../Counter/counterSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export const Counters = ({ id }: { id: string }) => {
  const value = useAppSelector((state) => state.counter.counters[id]);
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    dispatch(increment(id));
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 3,
        gridTemplateRows: "auto",
      }}
    >
      <Box sx={{ bgcolor: "primary.main" }}>Header</Box>
      <Box sx={{ bgcolor: "primary.main" }}>Header</Box>
      <Box sx={{ bgcolor: "primary.main" }}>Header</Box>
      <Box sx={{ bgcolor: "primary.main" }}>Header</Box>
    </Box>
  );
};
