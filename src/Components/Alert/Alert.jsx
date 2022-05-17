import React,{useState} from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Slide from '@material-ui/core/Slide';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ShowAlert = ({resMessage, resSuccess, open, setOpen}) => {
    const vertical = 'bottom';
    const horizontal = 'center'

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    }
    function TransitionLeft(props) {
        return <Slide {...props} direction="up" />;
    }
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} TransitionComponent={TransitionLeft} anchorOrigin={{ vertical, horizontal }}>
            <Alert onClose={handleClose} severity={resSuccess?"success":"error"} sx={{ width: '100%' }}>
                {resMessage}
            </Alert>
        </Snackbar>
    )
}

export default ShowAlert