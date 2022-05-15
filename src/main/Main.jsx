import React , { useContext} from 'react'

import  { Card ,Grid , CardHeader , CardContent, Typography, Divider, Box } from '@material-ui/core';

import Form from './Form/Form';
import List from './List/List';

import { ExpenseContext } from '../context/Context';

import useStyles from './styles';

const Main = () => {
  const classes = useStyles();

  const { balance } = useContext(ExpenseContext);

  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker"/>
        <CardContent>
            <Typography align='center' variant='h5'>Total balance ${balance}</Typography>
        </CardContent>
        <Divider></Divider>
        <Box p={2}>
          <Form></Form>
        </Box>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                  <List></List>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default Main