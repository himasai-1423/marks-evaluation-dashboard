import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import { makeStyles } from "@material-ui/core";
import Homepage from "./Components/Homepage";
import MentorView from "./Components/MentorView";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />

        <Route path="/" component={Homepage} exact />
        <Route path="/mentor/:id" component={MentorView} />
      </div>
    </BrowserRouter>
  );
}

export default App;
