import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Table from "./Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Card, CardContent } from "@material-ui/core";
import UserDetail from "./UserDetail";
import Login from "./Login";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  return (
    <div className="app">
      <Router>
        {loggedInUser ? (
          <Route exact path="/">
            <div className="app__header">
              <Header />
            </div>
            <div>
              <Card>
                <CardContent>
                  <h3>Covid Statistics by Country</h3>
                  <Table />
                </CardContent>
              </Card>
            </div>
          </Route>
        ) : (
          <>
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/signUp">
                <UserDetail />
              </Route>
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
