var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/tenders', function(req, res, next) {
  res.render('list_of_tenders');
});

router.get('/complete', function(req, res, next) {
  res.render('completed_tenders');
});

router.get('/add', function(req, res, next) {
  res.render('add_tender');
});

module.exports = router;

