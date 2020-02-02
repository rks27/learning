import React, { useState } from "react";
import "./App.css";
import { Button, Grid, Segment, Label, Flex } from "@fluentui/react";
import logLines from "./examples/log";
import { logResults } from "./examples/log";
// import main from "./examples/bracket";
import main from "./examples/fib";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

main();

const App: React.FC<any> = (prop: any) => {
  const [lines, refreshLines] = useState({
    output: logLines()
  });

  const [results, refreshResults] = useState({
    output: logResults()
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
          <Link to="/"></Link>
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
              <Flex column padding="padding.medium" gap="gap.smaller">
                {results.output.map((l: any) => {
                  return <Button>{l}</Button>;
                })}
                <Button
                  primary
                  onClick={() => {
                    refreshResults({ output: logResults() });
                  }}
                >
                  Refrsh Results
                </Button>
              </Flex>
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
          <Flex column padding="padding.medium" gap="gap.smaller">
            {lines.output.map((l: any) => {
              return <Label color="gray">{l}</Label>;
            })}
            <Button
              primary
              onClick={() => {
                refreshLines({ output: logLines() });
              }}
            >
              Refrsh log
            </Button>
          </Flex>
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
