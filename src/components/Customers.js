import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Addcustomer from './Addcustomer'
import Editcustomer from './Editcustomer'


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
    const saveCustomer = (car) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))

    }
    const updateCar = (car, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
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
            Cell: row => <Editcustomer updateCar={updateCar} customer={row.original} />
          },
          {
              filterable: false,
              sortable: false,
              width: 100,
              accessor: '_links.self.href',
              Cell: row => <Button size="small" color="secondary"onClick={() => deleteCar(row.value)}>Delete</Button>
          }
    ]

    return(
        <div>
            <Addcustomer saveCustomer={saveCustomer}/>
            
            <ReactTable filterable={true} data={customers} columns={columns} />

        </div>
    )

};
