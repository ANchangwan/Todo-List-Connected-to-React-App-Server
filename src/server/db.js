import mysql from 'mysql2';

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    port: "3306",
    database: "mydb"
});

db.connect((err) => {
    console.log(err);
    if (!err) {
        console.log('db접속 성공!');
    } else {
        console.log('db접속 실패!');
    }
});

export default db;