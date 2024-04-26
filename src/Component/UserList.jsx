import React,{useState,useEffect   } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function UserList() {
  const [listofuser,setlistofuser] = useState([])
  useEffect(()=>{
    const fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setlistofuser(response.data);

    } 
    fetchData();
})
  
  
    return (
    <div>
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {listofuser.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </Table>


    


    </div>
  )
}

export default UserList