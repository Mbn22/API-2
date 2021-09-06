import React, { useEffect, useState } from "react";
import axios from 'axios';
import User from './User'
const UserList = () => {


 const [listOfUSer , setlistOfUSer ] = useState();
 
       

       useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => setlistOfUSer(res.data))
      }, []);
      console.log(listOfUSer)
 return (  
    <div>
       { (listOfUSer)? listOfUSer.map((user,index)=>{return(<User key={index} name={user.name}  phone={user.phone} address={`Address:${user.address.street},
       ${user.address.suite},
       ${user.address.zipcode}`}/>
       )}):""}
    </div>
  );
}

export default UserList;