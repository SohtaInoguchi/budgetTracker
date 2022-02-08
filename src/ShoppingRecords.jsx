import React, { useEffect, useState } from "react";
const axios = require('axios');

export default function ShoppingRecords ({ records }) {
    // const [shoppingRecords, setShoppingRecords] = useState([]);

    // useEffect( async () => {
        // const response = await axios({
        //     method: 'get',
        //     url: `http://localhost:5000/purchaseRecords/${user}`,
        // });
        // setShoppingRecords(() => response.data.rows);
        // console.log("state", shoppingRecords);
    // }, []);
    // }, [shoppingRecords]);

    return (
    <>
        {records.map(record => 
        <ul key={record.id}>
            <li >Item: {record.item}</li>
            <li >Price: {record.price}</li>
            <li >Date: {record.purchase_date}</li>
        </ul> )}
    </>
    )
}