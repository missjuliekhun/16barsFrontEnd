
var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose');


//naming our app
mongoose.connect('mongodb://localhost:3000/api/poems');
app.set('views', './views');

// Middleware
app.use(express.static(__dirname + '/public'));
//home
app.get('/', (req, res) => {
  res.render('./index.html');
});

//index
app.get('/api/poems', (req, res) => {
  res.render('./index.html', {
    poems: db.Poems
  });
});
















// function Router($stateProvider){
//   console.log("working")
// }
// })();


// // BASE SETUP
// // =============================================================================
// var Poem = require('./app/models/poem')
// // call the packages we need
// var express    = require('express');
// // call express
// var app        = express();
// // define our app using express
// var bodyParser = require('body-parser');
//
// var mongoose = require('mongoose')
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/poemDb')
// // set up a variable to hold our model here...
// mongoose.Promise = global.Promise;
// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());
//
// var port = process.env.PORT || 8080;
// // set our port
//
//
//
//
//
//
// // ROUTES FOR OUR API
// // =============================================================================
// var router = express.Router();
// var router2 = express.Router();
// // get an instance of the express Router
//
// router.use(function(req, res, next) {
//   console.log("Something is happening");
//   next();
// });
//
//
// // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function(req, res) {
//   res.json({ message: 'Welcome to 16 bars' });
//   res.redirect('/api');
// });
//
// router.get('/api', function(req, res) {
//   res.json({ message: 'Welcome to 16 bars' });
//   res.redirect('/api/');
// });
//
//
//
//
//
//
// // more routes for our API will happen here
// router.route('/poems')
//
// // create
//   .post(function(req, res) {
//     Poem.create(req.body.poem)
//   .then((poem) => {res.json(poem);})
//   .catch((err) => {if(err) console.log(err);});
//   })
//
// // index
//   .get(function(req, res) {
// Poem.find().then(function(poems){res.json(poem);});
//  });
//
// router.route('/api/poems/:poem_id')
//
//   // show
//   .get(function(req, res) {
//     Poem.findOne({__id: req.body.beer_id})
//     .then((poem) => { res.json(poem);})
//     .catch((err) => { if(err) console.log(err);});
//   })
//
//   // update
//   .put(function(req, res) {
//     // code here
//   })
//
//   // destroy
//   .delete(function(req, res) {
//     // code here
//   })
//
// // View all routes
// router.get("/routes", function(req, res){
//   console.log(router.stack);
//   res.json(router.stack);
// });
// // REGISTER OUR ROUTES -------------------------------
// // all of our routes will be prefixed with /api
// app.use('/api', router);
// app.use('/', router2);
//
//
// // START THE SERVER
// // =============================================================================
// app.listen(port);
// console.log('Bars are being served on port ' + port);








//=============== State Provider stuff =======================================//


//
// $stateProvider
//   .state('poems',{
//     views: {
//       'filters': {
//         templateUrl: 'poems.html',
//         controller: function($scope){ 'sixteen.controller.js' }
//         url: '/api/poems'
//       }
//       }
//   })

  //
  // myApp.config(function($stateProvider) {
  //   var poemsState = {
  //     name: 'poems',
  //     url: 'localhost:3000/api/poems',
  //     template: './api/index.html'
  //   }
  //
  //
  //   $stateProvider.state(poemsState);
  // });

//
// .state('index', {
//     url: '/api/index',
//     templateUrl: 'index.html'
// })
//
//
// .state('poem.find({})', {
//     url: '/api/:id',
//     templateUrl: '', //show.directive.js?
//     controller: function($scope) {
//         $scope.poems = ;
//     }
// })

// var poemState = {
//   name: 'poems.title',
//   url: '/{poemId}',
//   component: 'poem',
//   resolve: {
//     person: function(poem, $stateParams) {
//       return poem.find(function(poem) {
//         return poem.id === $stateParams.poemId;
//       });
//     }
//   }
// }
