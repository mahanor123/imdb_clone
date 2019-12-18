let express = require('express');
let router = express.Router();
let db = require('../db/db')


router.get('/', async(req, res, next)=>{
  try {
   
    let results = await db.all();
    res.json(results);
    
  }catch(e){
      console.log(e);
      res.sendStatus(500);
  }

});



module.exports = router;