import React from 'react'
import  { Card ,Grid , CardHeader , CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'


import useTransactions from '../useTransaction';

import useStyles from './details-style';
Chart.register(ArcElement , Tooltip, Legend);

const Details = ({ title }) => {
  const classes = useStyles();

  const { total , chartData } = useTransactions(title);

  return (
        <Card className={title === "Expense" ? classes.expense : classes.income}>
            <CardHeader title={title}/>
            <CardContent>
              <Typography variant='h5'>${total}</Typography>
              <Doughnut aspectRatio={false} data={chartData} />
            </CardContent>
        </Card>
  )
}

export default Details;