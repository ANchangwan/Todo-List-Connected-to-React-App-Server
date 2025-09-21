import db from "./db.js";
import app from "./app.js";


app.get("/api/todos", (req, res) => {
    const sql = "SELECT id,content FROM todos order by id desc";
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).send({msg:"데이터 조회 실패했습니다.", error:false});
        }
        console.log(result);
        return res.status(200).json(result);
    })
});

app.post("/api/todos", (req, res) => {
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
        return res.status(201).send({msg:"등록 성공",data:{
                id: result.insertId,
                content
            }

        });
    })

});




