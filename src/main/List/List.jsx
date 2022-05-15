import React , { useContext } from 'react'

import { List as MUILIST , ListItem , ListItemAvatar , ListItemText , Avatar , ListItemSecondaryAction , IconButton, Slide} from '@material-ui/core';
import { Delete , MoneyOff } from '@material-ui/icons';

import { ExpenseContext } from '../../context/Context';

import useStyles from './styles';

const List = () => {
    
    const classes = useStyles();

    const { deleteTransaction , transactions} = useContext(ExpenseContext);

    
  return (
    <MUILIST dense={false} className={classes.list}>
        {transactions.map((transaction) => 
            <Slide key={transaction.id} direction="down" in mountonenter="true" mountonexit="true" >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={transaction.type === "Expense" ? classes.avatarExpense : classes.avatarIncome}>
                            <MoneyOff/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.category} secondary={`${transaction.amount} - ${transaction.date}`}/>
                    <ListItemSecondaryAction>
                        <IconButton edge='end' aria-label="delete" onClick={() => {deleteTransaction(transaction.id)}}>
                            <Delete/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Slide>
        )}
    </MUILIST>
  )
}

export default List