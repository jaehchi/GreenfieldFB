import  dbConnection  from './db';

const searchModel = function (username, callback) {
  dbConnection.query(`SELECT * FROM users WHERE username = "${username}"`, function (err, result, fields) {
    if (err) { throw err; } 
    console.log('this is in the model', result);
    callback(err, {results: result});
  });    
}


export default searchModel;

