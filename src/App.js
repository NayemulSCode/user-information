import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User';
import FontCart from './FontCart';


function App() {
    const [users, setUsers] = useState([]);
    useEffect(() =>{
      fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => {
          setUsers(data.results);
          console.log(data);
          //const names = users.map(user => user.name.first)
          //console.log(names)
        })
        .catch(error => console.log(error))
    },[])
  return (
    <div className="">
      <div>
        {
          users.map(user=>
           <User 
            user = {user}
            key={user.location.postcode}
           /> 
          )
        }
      </div>
        <button>Add user</button>
        <FontCart />
    </div>
  );
}

export default App;
