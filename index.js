const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./server/db");
const path = require('path');
require('dotenv').config();

// middleware
app.use(express.json());
// app.use(cors());
// app.use(express.static(path.resolve(__dirname, "..", "build")));
// app.use(express.static(path.resolve(__dirname + "/build")));
app.use(express.static(__dirname + "/build"));


const PORT = process.env.PORT || 5000;
console.log("port", PORT);
// route
app.post("/addpurchase", async (req, res) => {
    try {
        const { item, price, date, user, budget, balance } = req.body; 
        const newPurchase = await pool.query(
            "INSERT INTO expenses (item, user_name, price, budget, balance, purchase_date) VALUES($1, $2, $3, $4, $5, $6)",
            [item, user, price, budget, balance, date]
            )
        // console.log("newPurchase", newPurchase);
        res.send(newPurchase);
    } catch (error) {
        console.error(error.message);
    }
})

// app.get("/purchaseRecords/:username", async (req, res) => {
app.get("/purchaseRecords", async (req, res) => {
    try {
        // const currentUser = req.params.username;
        // console.log("user", req.params.username);
        const shoppingRecords = await pool.query("SELECT * FROM expenses")
        // const shoppingRecords = await pool.query(`SELECT * FROM expenses WHERE user_name=$1`,
        // [currentUser])
        console.log("shoppingrecords", shoppingRecords.rows);
      res.send(shoppingRecords);  
    } catch (error) {
        console.error(error.message);
    }
})

// login routers
app.use("/auth", require("./jwtAuto"));

app.listen(PORT, () => {
    console.log(`app listens port ${PORT}`);
})