const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());
app.use(express.json());



//create database connection
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'virtucrop',
    // insecureAuth : true
});


app.post('/contact',(req,res)=>{
    const { name, email, phone, message } = req.body;
    const insertQuery = 'INSERT INTO contact (`name`, `email`, `phone`, `message`) VALUES (?, ?, ?, ?)';
    conn.query(insertQuery, [name, email,phone, message], (err, result) => {
        if (err) {
            console.error('Error inserting data into database: ' + err.message);
            res.status(500).send('Internal Server Error');
            return;
        }
        console.log('Data inserted into database');
        res.status(200).send('Form submitted successfully');
    });
});

//listen to port
app.listen(5000, () => {
        console.log(`Server running successfully on 5000`);
    });