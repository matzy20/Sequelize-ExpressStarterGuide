var express = require('express');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));


var db = require('./models');
  //singular in model, plural in routes, e.g. pulling alll user
  app.post('/users', function (req, res){
    db.user.create({
      username: req.body.username
    }).then(function(user){
      //what to put here?
      console.log('user', user);
      res.json(user);
    });
  });

  app.get('/users', function (req, res){
    db.user.findAll({}).then(function(users){
      //users since pulling allll users
      res.json(users);
    });
  });

app.listen(3000, function() {
  db.sequelize.sync();
});