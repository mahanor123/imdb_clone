var mysql = require('mysql');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'database1'
});

let testdb = {};


testdb.all = ()=>{

    return new Promise((resolve, reject)=>{

       connection.query("SELECT * FROM table1", (err, results)=>{
        if (err) {
            return reject(err);
        }
        return resolve(results);
  
       });


    })

    
};




module.exports = testdb;