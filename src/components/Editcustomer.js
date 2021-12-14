import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function Editcustomer(props) {
  const [open, setOpen] = React.useState(false);
  const [customer, setCustomer] = React.useState({
      firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: ''
  })

  const handleClickOpen = () => {
    console.log(props.customer);
    setCustomer({firstname: props.customer.firstname, lastname: props.customer.lastname,
      streetaddress: props.customer.streetaddress, postcode: props.customer.postcode,
      city: props.customer.city, email: props.customer.email, phone: props.customer.phone})
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleInputChange = (event) => {
      setCustomer({...customer, [event.target.name]: event.target.value})

  }
  const updateCustomer = () => {
      props.updateCustomer(customer, props.original.links[0].href);
      handleClose();
  }

    return(
      <div>
      <Button color="primary" onClick={handleClickOpen}>
          Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit customer</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="firstname"
              value={customer.firstname}
              onChange={e => handleInputChange(e)}
              label="Etunimi"
              fullWidth
            />
            <TextField
              margin="dense"
              name="lastname"
              value={customer.lastname}
              onChange={e => handleInputChange(e)}
              label="Sukunimi"
              fullWidth
            />
             <TextField
              margin="dense"
              name="streetaddress"
              value={customer.streetaddress}
              onChange={e => handleInputChange(e)}
              label="Osoite"
              fullWidth
            />
            <TextField
              margin="dense"
              name="postcode"
              value={customer.postcode}
              onChange={e => handleInputChange(e)}
              label="Postinumero"
              fullWidth
            />
            <TextField
              margin="dense"
              name="city"
              value={customer.city}
              onChange={e => handleInputChange(e)}
              label="Kaupunki"
              fullWidth
            />
             <TextField
              margin="dense"
              name="email"
              value={customer.email}
              onChange={e => handleInputChange(e)}
              label="Sähköposti"
              fullWidth
            />
            <TextField
              margin="dense"
              name="phone"
              value={customer.phone}
              onChange={e => handleInputChange(e)}
              label="Puhelin"
              fullWidth
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={updateCustomer} color={"primary"}>Update</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
        </Dialog>

        </div>
    )
}