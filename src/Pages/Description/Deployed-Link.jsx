import {useState} from 'react'
import {Link} from 'react-router-dom';
import './description.css'
import CallMadeIcon from '@mui/icons-material/CallMade';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DeployedLink = ({Dlink}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <>
    <div className='link-container' onClick={handleClickOpen}>
       <div className="link-style"> Deployed Link</div>
       <div className="link-arrow" style={{fontSize: 'larger'}}><CallMadeIcon /></div>
    </div>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please read the following! and wait for api's to load"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {Dlink[1]}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
           <Link to={Dlink[0]} target="_blank" rel="noopener noreferrer">OKAY</Link> 
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeployedLink