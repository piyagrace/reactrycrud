import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"crudtest"
})

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.json("hello this is the backend hehe")
})

app.get("/post", (req,res)=>{
    const q = "SELECT * FROM post"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/post", (req,res)=>{
    const q = "INSERT INTO post (`title`,`content`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.content,
    ]

    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Post added successfully")        
    })
})


app.delete("/post/:id", (req,res)=>{
    const postId = req.params.id;
    const q = "DELETE FROM post WHERE id = ?"

    db.query(q, [postId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Post has been deleted successfully.");
    })
})

app.put("/post/:id", (req,res)=>{
    const postId = req.params.id;
    const q = "UPDATE post SET `title` = ?, `content` = ? WHERE id = ?";

    const values=[
        req.body.title,
        req.body.content,
    ]

    db.query(q, [...values,postId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Post has been updated successfully.");
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})