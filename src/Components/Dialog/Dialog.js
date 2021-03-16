import React from 'react';
import { Dialog, DialogContent, DialogActions, DialogTitle, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const dialogButtonOnClicked = ({
    endGame,
    setOpen,
    history,
}) => {
   if (endGame) {
      localStorage.removeItem('game-id');
      history.push('/');
   }
   setOpen(false);
   return null;
}


export default function DialogBox({ open, title, message, buttonMessage, endGame }) {
    const history = useHistory();
    console.log('OPEN', open);
    const setOpen = React.useState(false)[1];
    return (<Dialog open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{message}</DialogContent>
        <DialogActions>
            <Button onClick={() => { dialogButtonOnClicked({ endGame, setOpen, history })}}>{buttonMessage || 'OK'}</Button>
        </DialogActions>
    </Dialog>);
}