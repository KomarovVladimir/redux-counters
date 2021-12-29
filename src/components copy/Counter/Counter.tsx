import { increment, decrement } from "./counterSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export const Counter = ({ id }: { id: string }) => {
  const value = useAppSelector((state) => state.counter.counters[id]);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment(id));
  };

  const handleDecrement = () => {
    dispatch(decrement(id));
  };

  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Counter {id}
        </Typography>
        <Typography variant="h5" component="div">
          {value || 0}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="secondary"
          variant="contained"
          size="small"
          onClick={handleIncrement}
        >
          +
        </Button>
        <Button
          color="primary"
          variant="contained"
          size="small"
          onClick={handleDecrement}
        >
          -
        </Button>
      </CardActions>
    </Card>
  );
};
