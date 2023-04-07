import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: "inline-block",
    marginTop: "30px",
    margin: "20px",
    width: "30%",
  },

  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  },

  green: {
    fontFamily: "Montserrat",
    fontWeight: "400",
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

  red: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    display: "inline-block",
    alignItems: "center",
    width: "45%",
    backgroundColor: "transparent",
    marginTop: "10px",
    padding: "10px 20px",
    cursor: "pointer",
    textAlign: "center",
    color: "red",
    border: "1px solid black",
    borderColor: "red",
    borderRadius: "8px",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "red",
      color: "white",
    },

    whole: {
      marginTop: "30px",
    },
  },
});

const MentorView = () => {
  const classes = useStyles();

  var [count1, setCount1] = useState(3);
  var [count2, setCount2] = useState(2);
  var [count3, setCount3] = useState(4);
  var [count4, setCount4] = useState(1);
  var [count5, setCount5] = useState(5);
  var [count6, setCount6] = useState(6);

  return (
    <Container className={classes.whole}>
      <Card className={classes.root}>
        <CardContent>
          <PersonIcon style={{ color: "#22c1d6" }} />
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Neeraj Kumar
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            <br />
            Students Count:
          </Typography>
          <Typography variant="body2" component="p">
            {count1}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            className={classes.green}
            onClick={() => {
              count1 < 4
                ? setCount1(++count1)
                : alert("Can't add more Students");
            }}
          >
            Add
          </Button>
          <Button
            size="small"
            className={classes.red}
            onClick={() => {
              count1 > 3
                ? setCount1(--count1)
                : alert("Can't remove more Students");
            }}
          >
            Remove
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardContent>
          <PersonIcon style={{ color: "#22c1d6" }} />
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Aman Mishra
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            <br />
            Students Count:
          </Typography>
          <Typography variant="body2" component="p">
            {count2}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            className={classes.green}
            onClick={() => {
              count2 < 4
                ? setCount2(++count2)
                : alert("Can't add more Students");
            }}
          >
            Add
          </Button>
          <Button
            size="small"
            className={classes.red}
            onClick={() => {
              count2 > 3
                ? setCount2(--count2)
                : alert("Can't remove more Students");
            }}
          >
            Remove
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardContent>
          <PersonIcon style={{ color: "#22c1d6" }} />
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Jasleen Kaur
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            <br />
            Students Count:
          </Typography>
          <Typography variant="body2" component="p">
            {count3}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            className={classes.green}
            onClick={() => {
              count3 < 4
                ? setCount3(++count3)
                : alert("Can't add more Students");
            }}
          >
            Add
          </Button>
          <Button
            size="small"
            className={classes.red}
            onClick={() => {
              count3 > 3
                ? setCount3(--count3)
                : alert("Can't remove more Students");
            }}
          >
            Remove
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardContent>
          <PersonIcon style={{ color: "#22c1d6" }} />
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Aryan Sharma
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            <br />
            Students Count:
          </Typography>
          <Typography variant="body2" component="p">
            {count4}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            className={classes.green}
            onClick={() => {
              count4 < 4
                ? setCount4(++count4)
                : alert("Can't add more Students");
            }}
          >
            Add
          </Button>
          <Button
            size="small"
            className={classes.red}
            onClick={() => {
              count4 > 3
                ? setCount4(--count4)
                : alert("Can't remove more Students");
            }}
          >
            Remove
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardContent>
          <PersonIcon style={{ color: "#22c1d6" }} />
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Dishant Vardhan
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            <br />
            Students Count:
          </Typography>
          <Typography variant="body2" component="p">
            {count5}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            className={classes.green}
            onClick={() => {
              count5 < 4
                ? setCount5(++count5)
                : alert("Can't add more Students");
            }}
          >
            Add
          </Button>
          <Button
            size="small"
            className={classes.red}
            onClick={() => {
              count5 > 3
                ? setCount5(--count5)
                : alert("Can't remove more Students");
            }}
          >
            Remove
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardContent>
          <PersonIcon style={{ color: "#22c1d6" }} />
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Divya Kumari
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            <br />
            Students Count:
          </Typography>
          <Typography variant="body2" component="p">
            {count6}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            className={classes.green}
            onClick={() => {
              count6 < 4
                ? setCount6(++count6)
                : alert("Can't add more Students");
            }}
          >
            Add
          </Button>
          <Button
            size="small"
            className={classes.red}
            onClick={() => {
              count6 > 3
                ? setCount6(--count6)
                : alert("Can't remove more Students");
            }}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default MentorView;
