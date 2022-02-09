import './App.css';
import Input from './Input';
import ShoppingRecords from './ShoppingRecords';
import Warning from './Warning';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { use } from 'bcrypt/promises';

function App() {
  const [monthlyBudget, setMonthlyBdgt] = useState(0);
  const budgetInput = React.createRef();
  const [budget, setBudget] = useState(0);
  const [balance, setBalance] = useState(null);
  // const [balance, setBalance] = useState(0);
  const [user, setUser] = useState("");
  const [shoppingRecords, setShoppingRecords] = useState([]);
  const [isBalanceLow, setBalanceLow] = useState(false);
  const isMounted = useRef(false);

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
        // url: `/purchaseRecords`,
        // params: {
        //   user: username
        // }
    });
    console.log("response", response.data.rows);
    setUser(() => username);
    const shoppingRecordsByUser = response.data.rows.filter(record => record.user_name === username);
    console.log("shoppingRecordsByUser", shoppingRecordsByUser);
    setShoppingRecords(shoppingRecordsByUser);
    if (shoppingRecordsByUser.length !== 0) {
      console.log("In if block");
      // setBudget(() => response.data.rows[response.data.rows.length-1].budget);
      setBudget(() => shoppingRecordsByUser[shoppingRecordsByUser.length - 1].budget);
      // setBalance(() => shoppingRecordsByUser[shoppingRecordsByUser.length - 1].balance);
      setBalance(() => shoppingRecordsByUser[shoppingRecordsByUser.length - 1].balance);
      // console.log("balance getuserdata", balance);
      // if (!response.data.rows[response.data.rows.length-1].balance < response.data.rows[response.data.rows.length-1].budget) {
      //   setBalance(() => response.data.rows[response.data.rows.length-1].balance);
      // } else {
      //   setBalance(budget);
      // }
      // if (shoppingRecordsByUser[shoppingRecordsByUser.length - 1].balance) {
      //   setBalanceLow(true);
      // }
    }
  }

  function setBudgetBalance() {
    // if (budget === 0 && balance === 0) {
      setBudget(budgetInput.current.value);
      setBalance(budgetInput.current.value);
      setBalanceLow(false);
    // }
  }

  function check () {
    console.log(isBalanceLow);
    console.log("balance checkbutton", balance);
  }

  useEffect( async () => {
    console.log("user", user);
    getUserData();
    setUser(() => username); //Not really set?
    // setBudget(() => response.data.rows[response.data.rows.length-1].budget);
    // if (!response.data.rows[response.data.rows.length-1].balance < response.data.rows[response.data.rows.length-1].budget) {
    //   setBalance(() => response.data.rows[response.data.rows.length-1].balance);
    // }
  }, []);

  useEffect(() => {
    console.log("Balance 2nd useeffect", balance);
    if(isMounted.current) {
      if(balance < 5000) {
        console.log("balance < 5000!!!");
        setBalanceLow(() => true); 
      }
    }
    else {
      isMounted.current = true;
    }
  }, [balance, isBalanceLow])

  return (
    <>
    {isBalanceLow
      ? <Warning user={user}/>
      : <div></div>
    }
      <h1>User: {user}</h1>
      <h1>Budget:¥{budget} Balance:¥{balance}</h1>
      <div>
        <input type="number" id='budget' ref={budgetInput}/>
        <button onClick={setBudgetBalance}>Set budget</button>
        <button onClick={check}>BalanceLow</button>
      </div>
        <Input budget={budget} balance={balance} setBalance={setBalance} user={user}/>
        <button onClick={getUserData}>Refresh record</button>
        {/* <ShoppingRecords user={user}/> */}
        <ShoppingRecords records={shoppingRecords}/>
    </>
  );
}

export default App;
