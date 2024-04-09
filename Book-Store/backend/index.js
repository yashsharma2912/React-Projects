import express from "express"
import mysql from "mysql"

const app = express()

//Database Connection String

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Yash@123",
    database:"bookstore"
})

app.get("/",(req,res) => {
    res.json("hello this msg from mysql")
})

app.get("/books", (req,res) => {
    const q = "SELECT * FROM books"
    db.query(q,(err,data) => {
        if(err) res.json(err)
        return res.json(data)
    } )
})

//Server creation 
app.listen(8800, () => {
    console.log("Connected to BAckend 1!")
})