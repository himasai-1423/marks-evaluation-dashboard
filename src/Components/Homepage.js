import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const Homepage = () => {
  const useStyles = makeStyles({
    table: {
      fontFamily: "Montserrat",
      fontWeight: "bold",
      fontSize: "17px",
      width: "100%",
      marginTop: "30px",
    },

    row: {
      "&:hover": {
        backgroundColor: "#ebfceb",
        color: "white",
      },
    },

    whole: {
      padding: "10px",
      margin: "50px",
    },

    head: {
      fontWeight: "800",
      backgroundColor: "#39CC3E",
    },
  });

  function createData(
    StudentName,
    mentorAssigned,
    Idea,
    Method,
    solution,
    TechUsed,
    Total
  ) {
    return {
      StudentName,
      mentorAssigned,
      Idea,
      Method,
      solution,
      TechUsed,
      Total,
    };
  }

  const rows = [
    createData("a", "False", 30, 20, 20, 20, 100),
    createData("b", "False", 30, 20, 20, 20, 100),
    createData("c", "False", 30, 20, 20, 20, 100),
    createData("d", "False", 30, 20, 20, 20, 100),
    createData("e", "False", 30, 20, 20, 20, 100),
    createData("f", "False", 30, 20, 20, 20, 100),
  ];
  const classes = useStyles();

  return (
    <div className={classes.whole}>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.head}>
            <TableRow>
              <TableCell align="center">
                <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                  Student Name
                </span>
              </TableCell>
              <TableCell align="right">
                <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                  Mentor&nbsp;Assigned
                </span>
              </TableCell>
              <TableCell align="right">
                <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                  Idea
                </span>
              </TableCell>
              <TableCell align="right">
                <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                  Method
                </span>
              </TableCell>
              <TableCell align="right">
                <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                  Solution
                </span>
              </TableCell>
              <TableCell align="right">
                <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                  Languages&nbsp;Used
                </span>
              </TableCell>
              <TableCell align="right">
                <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                  Total
                </span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.StudentName} className={classes.row}>
                <TableCell component="th" scope="row" align="center">
                  {row.StudentName}
                </TableCell>
                <TableCell align="right">{row.mentorAssigned}</TableCell>
                <TableCell align="right">{row.Idea}</TableCell>
                <TableCell align="right">{row.Method}</TableCell>
                <TableCell align="right">{row.solution}</TableCell>
                <TableCell align="right">{row.TechUsed}</TableCell>
                <TableCell align="right">{row.Total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Homepage;
