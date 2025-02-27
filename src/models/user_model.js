// employee.model.js
var db = require('../config/data');

//Employee object create

const UserModel = {
   
    getUserByUsername: (username, callback) => {
        const query = 'SELECT * FROM user WHERE username = ?';
        db.query(query, [username], callback);
      }
}

module.exports= UserModel;