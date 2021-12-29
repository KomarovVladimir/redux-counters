import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";

import { increment, decrement, remove } from "./counterSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

export const Counter = ({
  id,
  automatic,
}: {
  id: string;
  automatic: boolean;
}) => {
  const [isAutomatic, setIsAutomatic] = useState<boolean>(automatic);
  const value = useAppSelector((state) => state.counter.counters[id]);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment(id));
  };

  const handleDecrement = () => {
    dispatch(decrement(id));
  };

  const handleRemove = () => {
    dispatch(remove(id));
  };

  useEffect(() => {
    setIsAutomatic(automatic);

    let intervalId: any;

    if (isAutomatic) {
      intervalId = setInterval(() => {
        dispatch(increment(id));
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [automatic, dispatch, id, isAutomatic]);

  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {value || 0}
        </Typography>
      </CardContent>
      <CardActions>
        {!automatic && (
          <Fragment>
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
          </Fragment>
        )}
        <Button
          color="primary"
          variant="outlined"
          size="small"
          onClick={handleRemove}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};
