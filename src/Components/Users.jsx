import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const lodededUsers = useLoaderData();
    const [users, setUsers] = useState(lodededUsers);
    const handleDelete =_id =>{
fetch(`http://localhost:5000/users/${_id}`,{
    method:"DELETE"
})
.then(res => res.json())
.then(data => {console.log(data);
if(data.deletedCount > 0){
    alert('delete successfully');
    const remaining = users.filter(user => user._id !== _id);
    console.log(remaining)
    setUsers(remaining);
} }
  )}
    return (
        <div>
<h2>{users.length}</h2>
<div>{
    users.map(user => <p key={user._id}>{user.name} : {user.email} <button onClick={() =>handleDelete(user._id)}>delete</button> 
<Link to={`/update/${user._id}`}> <button>Update</button></Link>    </p> )}
    </div> 
        </div>
    );
};

export default Users;