import React from 'react';
const axios = require('axios');


function Input(props) {
    console.log("budget", props.budget);
    const itemInput = React.createRef(); 
    const priceInput = React.createRef(); 
    
    // let username = localStorage.getItem('username');
    // if (!username) {
    //   username = window.prompt('What is your name?');
    //   localStorage.setItem('username', username);
    // }

    async function addItemPrice(e) {
      const newBalance = props.balance - priceInput.current.value;
      props.setBalance(newBalance);
        const response = await axios({
            method: 'post',
            url: "http://localhost:5000/addpurchase",
            data: {
                item: itemInput.current.value,
                price: priceInput.current.value,
                user: props.user,
                budget: props.budget,
                balance: props.balance,
                date: new Date()
            }
        });
        console.log("response", response);
    }

    return (
        <>
        <input ref={itemInput} type="text" id="item" placeholder="what did you buy?"/>
        <input ref={priceInput} type="number" id="price" placeholder="How much was it?"/>
        <button onClick={addItemPrice}>Add</button>
      </>
    );
  }
  
  export default Input;
  