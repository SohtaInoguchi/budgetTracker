const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
console.log(PORT);
// route
app.post("/addpurchase", async (req, res) => {
    try {
        const { item, price, date } = req.body; 
        console.log("server req body", item, price, date);
        const newPurchase = await pool.query(
            "INSERT INTO expenses (item, price, purchase_date) VALUES($1, $2, $3)",
            [item, price, date]
        )
        res.send(newPurchase);
    } catch (error) {
        console.error(err.message);
    }
})

app.listen(PORT, () => {
    console.log(`app listens port ${PORT}`);
})