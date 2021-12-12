import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';




export default function Customers() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
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
    ]

    return(
        <div>
            
            <ReactTable filterable={true} data={customers} columns={columns} />

        </div>
    )

};
