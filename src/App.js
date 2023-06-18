import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])


  const handleClick = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const value = {name, email}
    console.log(value);

    event.target.reset()
  }

  return (
    <div className="App">

    <form onSubmit={handleClick}>
      <input name='name' placeholder='Name'/>
      <br/>
      <input name='email' placeholder='Name'/>
      <br/>
      <button type='submit'>Add User</button>
    
    </form>

      {
        users.map(user => <p key={user.id}>{user.name} {user.email}</p>)
      }
    </div>
  );
}

export default App;
