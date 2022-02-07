import React from 'react';
const axios = require('axios');


function Input(e) {
    const itemInput = React.createRef(); 
    const priceInput = React.createRef(); 
    
    async function addItemPrice(e) {
        console.log("item", itemInput.current.value);
        console.log("price", priceInput.current.value);
        const response = await axios({
            method: 'post',
            url: "http://localhost:5000/addpurchase",
            data: {
                item: itemInput.current.value,
                price: priceInput.current.value            
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
  