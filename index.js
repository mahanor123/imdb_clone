



// Here index file is testing the connection to database and tables;

// this index file is not importent for this project



var mysql = require('mysql')
var express = require('express');
var app = express();
let port = 3000;



var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'database1'
})

connection.connect(function(err) {
     if (err) throw err;
     console.log("Connected!");


  //    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  // )

connection.query("SELECT * FROM table1", function (err, result, fields) {
      if (err) throw err;
      console.log(result);

      
    });


});





