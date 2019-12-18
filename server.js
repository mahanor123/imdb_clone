let express = require('express');
let apirouter = require('./routes/router');



let app = express();
app.use('/api', apirouter);           //use is middleware, incoming request has go through this

app.use (express.json);   //body convert to json;

app.listen(3000, ()=>{
    console.log('server is running on  3000');
});