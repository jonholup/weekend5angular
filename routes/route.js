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


router.post('/payroll', function(req, res) {
  console.log('hit post route');
  console.log('here is the body ->', req.body);

  var payrollObject = req.body;

  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('INSERT INTO payroll (first_name, last_name, id_number, job_title, annual_salary) VALUES ($1, $2, $3, $4, $5);',
        [payrollObject.first_name, payrollObject.last_name, payrollObject.id_number, payrollObject.job_title, payrollObject.annual_salary], function(err, result) {
          done();
          if(err){
            console.log(err);
            res.sendStatus(500); // the world exploded
          }else{
            res.sendStatus(201);
          }
      });
    }
  });
});


module.exports = router;
