import React from 'react';

import Details from "./components/Details";
import Main from './main/Main';

import {Grid} from "@material-ui/core";

import useStyles from './styles';

require('./index.css');

function App() {
  const classes = useStyles();

  return (
    <Grid style={{height:"100vh"}} className={classes.grid} container spacing={0} alignItems='center' justifyContent='center'>
      <Grid item xs={11} sm={3} md={3} >
        <Details title="Income"/>
      </Grid>

      <Grid item xs={12} sm={4} md={4} className={classes.main}>
        <Main/>
      </Grid>

      <Grid item xs={11} sm={3} md={3}>
        <Details title="Expense"/>
      </Grid>

    </Grid>
    )
}

export default App;
