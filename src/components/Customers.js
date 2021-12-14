import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';


export default function Customers() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.error(err))
    }
    const deleteCustomer = (link) => {
        if (window.confirm('Are you sure?'))
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
    }
    const addCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                firstname: "JOhn",
                lastname: "Smith",
                email: "j.@smith.com",
                phone: "343-2332345",
                streetaddress: "Yellow Street 23",
                postcode: "344342",
                city: "Yellowstone"

            }
        })
        .then(res => fetchData())
        .catch(err => console.error(err))

    }
    const updateCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                firstname: "JOhn",
                lastname: "Smith",
                email: "j.@smith.com",
                phone: "343-2332345",
                streetaddress: "Yellow Street 23",
                postcode: "344342",
                city: "Yellowstone"
            }
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
        
    }
    const columns = [
        {Header: 'Etunimi', accessor: 'firstname'},
        {Header: 'Sukunimi', accessor: 'lastname'},
        {Header: 'Osoite', accessor: 'streetaddress'},
        {Header: 'Postinumero', accessor: 'postcode'},
        {Header: 'Kaupunki', accessor: 'city'},
        {Header: 'Sähköposti', accessor: 'email'},
        {Header: 'Puhelin', accessor: 'phone'},

        {
            filterable: false,
            sortable: false,
            width: 100,
            Cell: row => <Editcustomer updateCustomer={updateCustomer} customer={row} />
          },
          {
              filterable: false,
              sortable: false,
              width: 100,
              accessor: 'links.rel.href',
              Cell: row => <Button size="small" color="secondary"onClick={() => deleteCustomer(row.value)}>Delete</Button>
          }
    ]

    return(
        <div>
            <Addcustomer addCustomer={addCustomer}/>
            
            <ReactTable filterable={true} data={customers} columns={columns} />

        </div>
    )

};
