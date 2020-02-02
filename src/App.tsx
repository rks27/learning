import React, { useState } from "react";
import "./App.css";
import { Button, Grid, Segment } from "@fluentui/react";
import logLines from "./examples/log";
import FindValidCombination from "./examples/bracket";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

FindValidCombination(2);

const App: React.FC<any> = (prop: any) => {
  const [lines, refreshLines] = useState({
    output: logLines()
  });

  return (
    <Router>
      <Grid columns="repeat(4, 1fr)" rows="50px 800px 50px">
        <Segment
          color="brand"
          content="Test Console"
          inverted
          styles={{
            gridColumn: "span 4"
          }}
        >
          <Link to="/">
            <Button>Misc</Button>
          </Link>
          <Link to="/tree">
            <Button>tree</Button>
          </Link>
          <Link to="/about">
            <Button>About</Button>
          </Link>
          <Link to="/stack">
            <Button>Stack</Button>
          </Link>
        </Segment>
        <Segment
          color="white"
          content="output"
          inverted
          styles={{
            gridColumn: "span 2"
          }}
        >
          <Switch>
            <Route exact path="/">
              <Button>Misc</Button>
            </Route>
            <Route path="/tree">
              <Button>tree</Button>
            </Route>
          </Switch>
        </Segment>
        <Segment
          content="Console"
          styles={{
            gridColumn: "span 2"
          }}
        >
          <div>
            {lines.output.map((l: any) => {
              return <div>{l}</div>;
            })}
            <Button
              primary
              onClick={() => {
                refreshLines({ output: logLines() });
              }}
            >
              Refrsh log
            </Button>
          </div>
        </Segment>
        <Segment
          color="brand"
          content=""
          inverted
          styles={{
            gridColumn: "span 4"
          }}
        />
      </Grid>
    </Router>
  );
};

export default App;
