import express from "express";
import User from './Models/user.model.js';
import dbConnection from './Database/connection.js'
import cors from 'cors'

const app = express();
dbConnection();
app.use(cors());
app.use(express.json());
const port = 3000;

app.post("/submit", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
});

app.listen(port, () => {
    console.log(`App is listning on port ${port}`);
});