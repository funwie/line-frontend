import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Users from "./components/Users";
import { Box, Heading, Grommet, Anchor } from 'grommet';
import AppBar from "./components/AppBar";
import Home from "./components/Home";

const theme = {
  global: {
    colors: {
      brand: '#399ba2',
    },
  },
};

export default function App() {
  return (
    <Router>
      <Grommet theme={theme} full>
        <Box fill>
          <AppBar title='Line-Up User App'>
            <Heading level='3' margin='none'>Line-Up User App</Heading>
              <Link to="/">Home</Link>
              <Link to="/users">Users</Link>
              <Anchor href="/" label="Home" />
          </AppBar>
          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Box>
      </Grommet>
    </Router>
  );
}