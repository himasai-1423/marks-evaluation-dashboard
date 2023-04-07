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
import { useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "@firebase/firestore";
import { useState } from "react";
const Homepage = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    // console.log(studentRef1);
    const querySnapshot = getDocs(collection(db, "Student"));
    querySnapshot.then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data());
      console.log(data);
      setStudent(data);
    });
  }, []);

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
            {student.map((row) => (
              <TableRow key={row.Name} className={classes.row}>
                <TableCell component="th" scope="row" align="center">
                  {row.Name}
                </TableCell>
                <TableCell align="right">{row.mentorA}</TableCell>
                <TableCell align="right">{row.Idea}</TableCell>
                <TableCell align="right">{row.Method}</TableCell>
                <TableCell align="right">{row.Solution}</TableCell>
                <TableCell align="right">{row.Languages}</TableCell>
                <TableCell align="right">
                  {row.Idea + row.Method + row.Solution + row.Languages}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Homepage;
