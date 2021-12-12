import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function Addcar(props) {
  const [open, setOpen] = React.useState(false);
  const [customer, setCustomer] = React.useState({
      firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: ''
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleInputChange = (event) => {
      setCustomer({...customer, [event.target.name]: event.target.value})

  }
  const addCar = () => {
      props.saveCustomer(car);
      handleClose();
  }

    return(
      <div>
      <Button style={{margin: 10}} variant="outlined" onClick={handleClickOpen}>
          Add customer
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New customer</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="firstname"
              value={content.firstname}
              onChange={e => handleInputChange(e)}
              label="Etunimi"
              fullWidth
            />
            <TextField
              margin="dense"
              name="lastname"
              value={content.lastname}
              onChange={e => handleInputChange(e)}
              label="Sukunimi"
              fullWidth
            />
             <TextField
              margin="dense"
              name="streetaddress"
              value={content.streetaddress}
              onChange={e => handleInputChange(e)}
              label="Osoite"
              fullWidth
            />
            <TextField
              margin="dense"
              name="postcode"
              value={content.postcode}
              onChange={e => handleInputChange(e)}
              label="Postinumero"
              fullWidth
            />
            <TextField
              margin="dense"
              name="city"
              value={content.city}
              onChange={e => handleInputChange(e)}
              label="Kaupunki"
              fullWidth
            />
             <TextField
              margin="dense"
              name="email"
              value={content.email}
              onChange={e => handleInputChange(e)}
              label="Sähköposti"
              fullWidth
            />
            <TextField
              margin="dense"
              name="phone"
              value={content.phone}
              onChange={e => handleInputChange(e)}
              label="Puhelin"
              fullWidth
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Poista</Button>
          <Button onClick={addCar}>Tallenna</Button>
        </DialogActions>
        </Dialog>

        </div>
    )
}