import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { Rooms } from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import { Error } from "./pages/Error";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
