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
        <ul key={record.id} className="list-group">
            <li className="list-group-item">Item: {record.item}</li>
            <li className="list-group-item">Price: {record.price}</li>
            <li className="list-group-item">Date: {record.purchase_date}</li>
        </ul> )}
    </>
    )
}