import logo from './logo.svg';
import './App.css';
import Input from './Input';
import ShoppingRecords from './ShoppingRecords';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { use } from 'bcrypt/promises';

function App() {
  const [monthlyBudget, setMonthlyBdgt] = useState(0);
  const budgetInput = React.createRef();
  // const [budget, setBudget] = useState(null);
  // const [balance, setBalance] = useState(null);
  const [budget, setBudget] = useState(0);
  const [balance, setBalance] = useState(0);
  const [user, setUser] = useState("");
  const [shoppingRecords, setShoppingRecords] = useState([]);

  // get username
  let username = localStorage.getItem('username');
  if (!username) {
    username = window.prompt('What is your name?');
    localStorage.setItem('username', username);
  }

  async function getUserData () {
    const response = await axios({
        method: 'get',
        // url: `http://localhost:5000/purchaseRecords/${username}`,
        url: `http://localhost:5000/purchaseRecords`,
        // params: {
        //   user: username
        // }
    });
    console.log("response", response.data.rows);
    setUser(() => username);
    const shoppingRecordsByUser = response.data.rows.filter(record => record.user_name === username);
    setShoppingRecords(shoppingRecordsByUser);
    if (shoppingRecords.length !== 0) {
      setBudget(() => response.data.rows[response.data.rows.length-1].budget);
      if (!response.data.rows[response.data.rows.length-1].balance < response.data.rows[response.data.rows.length-1].budget) {
          setBalance(() => response.data.rows[response.data.rows.length-1].balance);
      } else {
        setBalance(budget);
      }
    }
  }

  function setBudgetBalance() {
    if (budget === 0 && balance === 0) {
      setBudget(budgetInput.current.value);
      setBalance(budgetInput.current.value);
    }
  }

  useEffect( async () => {
    setUser(() => username);
    console.log("user", user);
    getUserData();
    // setBudget(() => response.data.rows[response.data.rows.length-1].budget);
    // if (!response.data.rows[response.data.rows.length-1].balance < response.data.rows[response.data.rows.length-1].budget) {
    //   setBalance(() => response.data.rows[response.data.rows.length-1].balance);
    // }
}, []);

  return (
    <>
      <h1>User: {user}</h1>
      <h1>Budget:¥{budget} Balance:¥{balance}</h1>
      <div>
        <input type="number" id='budget' ref={budgetInput}/>
        <button onClick={setBudgetBalance}>Set budget</button>
      </div>
        <Input budget={budget} balance={balance} setBalance={setBalance} user={user}/>
        <button onClick={getUserData}>Refresh record</button>
        {/* <ShoppingRecords user={user}/> */}
        <ShoppingRecords records={shoppingRecords}/>
    </>
  );
}

export default App;
