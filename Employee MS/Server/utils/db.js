import mysql from 'mysql2'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "#Giaan512",
    database: "employeems"
})

con.connect(function(err){
    if(err){
        console.log("Connection failed!");
    } else {
        console.log("Connected!");
    }
})

export default con;