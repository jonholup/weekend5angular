var router = require('express').Router();
var pg = require('pg');
var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};


var pool = new pg.Pool(config);

router.get('/payroll', function(req, res){
  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to database: ', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      client.query('SELECT first_name, last_name, id_number, job_title, annual_salary FROM payroll;', function(errorMakingQuery, result){
        done();
        if(errorMakingQuery) {
          console.log('Error making the database query: ', errorMakingQuery);
          res.sendStatus(500);
        } else {
          res.status(200).send(result.rows);
        }
      });//end of function(errorMakingQuery, result)
    }
  });//end of pool.connect
});//end og router.get












module.exports = router;
