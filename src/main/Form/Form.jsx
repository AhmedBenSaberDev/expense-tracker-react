import React , { useState , useContext }from 'react'

import { Box,  TextField , Button , FormControl ,Typography , MenuItem , Select , Grid , InputLabel } from '@material-ui/core'

import { ExpenseContext } from '../../context/Context';

import { v4 as uuidv4 } from 'uuid';

import formatDate from "../../utils/date";
import { incomeCategories , expenseCategories } from '../../constants/categories';

import useStyles from './styles';

const Form = () => {

    const classes = useStyles();

    const { addTransaction } = useContext(ExpenseContext);

    const initialState = {
        amount:"",
        category:"",
        type:"Income",
        date: formatDate(new Date())
    }

    const [formData,setFormData] = useState(initialState)

    const createTransaction = () => {
        const transaction = { ...formData , amount:Number(formData.amount) , id: uuidv4() };
        console.log(transaction);
        addTransaction(transaction);
        setFormData(initialState);
    }

    const selectedCategories = formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>

        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select value={formData.type} onChange={(e) => setFormData({...formData , type:e.target.value})}>
                    <MenuItem value="Income">Income</MenuItem>
                    <MenuItem value="Expense">Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Categorie</InputLabel>
                <Select value={formData.category} onChange={(e) => setFormData({...formData , category:e.target.value})}>
                    { selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>) }
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
        <TextField type="number" label="Amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} fullWidth />
        </Grid>
        <Grid item xs={6}>
        <TextField fullWidth label="Date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />
        </Grid>
        <Button className={classes.button} variant='outlined' color='primary' fullWidth onClick={() => createTransaction()}>Create</Button>
    </Grid>
  )
}

export default Form