



// Here index file is testing the connection to database and tables;

// this index file is not importent for this project



var mysql = require('mysql')
var express = require('express');
var app = express();
let port = 3000;
let bodyParser = require('body-parser')





var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'database1'
})

connection.connect(function(err) {
     if (err) throw err;
     console.log("Connected!");

 });


     // Create DB
// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE nodemysql';
//     connection.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Database created...');
//     });
// });



// Create table
// app.get('/createpoststable', (req, res) => {
//     let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
//     connection.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Posts table created...');
//     });
// });



// Insert post 1
// app.get('/addpost1', (req, res) => {
//     let post = {title:'Post One', body:'This is post number one'};
//     let sql = 'INSERT INTO posts SET ?';
//     let query = connection.query(sql, post, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Post 1 added...');
//     });
// });


// Select posts
app.get('/getposts', (req, res) => {
  let sql = 'SELECT * FROM table1';
  let query = connection.query(sql, (err, results) => {
      if(err)throw err;
      

      // console.log(results);
       res.json(results);
  });
});

// Update post
// app.get('/updatepost/:id', (req, res) => {
//     let newTitle = 'Updated Title';
//     let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
//     let query = connection.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Post updated...');
//     });
// });

// Delete post
// app.get('/deletepost/:id', (req, res) => {
//     let newTitle = 'Updated Title';
//     let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
//     let query = connection.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Post deleted...');
//     });
// });




app.listen('3000', () => {
  console.log('Server started on port 3000');
});



