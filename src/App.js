import { useEffect, useState } from 'react';
import './App.css';
import FontCart from './FontCart';


function App() {
    const [users, setUsers] = useState([]);
    useEffect(() =>{
      fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(data => {
          setUsers(data.results);
          console.log(data);
          const names = users.map(user => user.name.first)
          console.log(names)
        })
        .catch(error => console.log(error))
    },[])
  return (
    <div className="App">
      <header className="App-header">
      <div>
        {
          users.map(user=>
           <p>{user.name.first}</p> 
          )
        }
      </div>
        <button>Add user</button>
        <FontCart />
      </header>
    </div>
  );
}

export default App;
