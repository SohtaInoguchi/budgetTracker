const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// route
app.post("/addpurchase", async (req, res) => {
    try {
        console.log(req.body);
        res.send(req.body);
    } catch (error) {
        console.error(err.message);
    }
})

app.listen(PORT, () => {
    console.log("app listens port 5000");
})