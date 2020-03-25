import React from "react";
import RoboCard from "./RoboCard";
import { Grid } from '@material-ui/core';

export default function RoboCardList({ robots }) {
  return (
    <Grid
      container
      alignContent='space-around'
      alignItems='center'
      justify='space-around'
      spacing={2}
    >
      {robots.map((user, i) => {
        return (
          <RoboCard
            item
            key={user.id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </Grid>
  );
}
