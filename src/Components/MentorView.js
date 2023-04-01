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

const addStudent = () => {};

const removeStudent = () => {};

const MentorView = () => {
  const classes = useStyles();
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
            3
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className={classes.green} onClick={addStudent}>
            Add
          </Button>
          <Button size="small" className={classes.red} onClick={removeStudent}>
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
            2
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className={classes.green} onClick={addStudent}>
            Add
          </Button>
          <Button size="small" className={classes.red} onClick={removeStudent}>
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
            4
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className={classes.green} onClick={addStudent}>
            Add
          </Button>
          <Button size="small" className={classes.red} onClick={removeStudent}>
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
            3
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className={classes.green} onClick={addStudent}>
            Add
          </Button>
          <Button size="small" className={classes.red} onClick={removeStudent}>
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
            3
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className={classes.green} onClick={addStudent}>
            Add
          </Button>
          <Button size="small" className={classes.red} onClick={removeStudent}>
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
            3
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className={classes.green} onClick={addStudent}>
            Add
          </Button>
          <Button size="small" className={classes.red} onClick={removeStudent}>
            Remove
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default MentorView;
