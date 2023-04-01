import { Container, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const Header = () => {
  const useStyles = makeStyles(() => ({
    title: {
      textAlign: "center",
    },
  }));

  const classes = useStyles();

  return (
    <Container>
      <Typography className={classes.title} variant="h3">
        Marks Evaluation Dashboard
      </Typography>
    </Container>
  );
};

export default Header;
