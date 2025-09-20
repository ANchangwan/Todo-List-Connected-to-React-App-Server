import db from "./db.js";
import app from "./app.js";
import mysql from "mysql2";



app.get("/", (req, res) => {
    const sql = "SELECT * FROM todos";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.json(result);
    })
});

app.post("/api/todo", (req, res) => {
    const {todos} = req.body;
    const content = todos;
    const completed = 0;
    const sql = `insert into todos(content, completed) values(?, ?)`;

    db.query(sql,  [content,completed],(err, result) => {
        if(err) {
            console.log("/api/todo post error", err);
            return res.status(500).send({msg: "저장 실패"});
        }
        console.log("result",result);
        return res.status(200).send({msg:"등록 성공"});
    })

});




