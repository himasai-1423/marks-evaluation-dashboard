import {
  Button,
  Container,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const useStyles = makeStyles(() => ({
    heading: {
      flex: 1,
      color: "#39cc3e",
      fontFamily: "Kaushan Script",
      fontWeight: "bold",
      cursor: "pointer",
      alignItems: "center",
      textAlign: "center",
      margin: "5px",
      padding: "15px",
      marginBottom: "0px",
    },

    button: {
      fontFamily: "Montserrat",
      fontWeight: "800",
      display: "inline-block",
      alignItems: "center",
      width: "45%",
      backgroundColor: "transparent",
      marginTop: "10px",
      padding: "10px 20px",
      cursor: "pointer",
      textAlign: "center",
      color: "#39CC3e",
      border: "1px solid black",
      borderColor: "#39CC3E",
      borderRadius: "8px",
      textTransform: "uppercase",
      "&:hover": {
        backgroundColor: "#39CC3E",
        color: "white",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Container>
        <Typography className={classes.heading} variant="h3">
          Marks Evaluation Dashboard
        </Typography>
      </Container>
      <Divider variant="middle" />
      <Container>
        <Link to="/">
          <Button className={classes.button}>View Students</Button>
        </Link>
        &nbsp; &nbsp;
        <Link to="/mentor/:id">
          <Button className={classes.button}>Mentor Page</Button>
        </Link>
      </Container>
    </div>
  );
};

export default Header;
