const express = require('express');
const urlencodedParser = express.urlencoded({extended: false});
const CardModel = require("../models/card");
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/tenders', function(req, res, next) {
  CardModel.findAll({
    attributes: ["id", "tender", "customer", "description", "start", "finish", "price"],
  })
      .then((result) => {
        return res.render('list_of_tenders');
        //return res.json(result);
      })
      .catch((error) => {
        console.log(error);
        return res.json({
          message: 'Unable to fetch the record!'
        });
      });
});

router.get('/tenders/:id', function(req, res, next) {
  res.render('card_information');
});

router.get('/complete', function(req, res, next) {
  res.render('completed_tenders');
});

router.get('/add', function(req, res, next) {
  res.render('add_tender');
});

router.post("/add", urlencodedParser, function(req, res, next) {
  CardModel.create({
    tender: req.body.nameTender,
    customer: req.body.nameCustomer,
    description: req.body.Description,
    start: req.body.startTender,
    finish: req.body.finishTender,
    price: req.body.Price,
  }).then((result) => {
      res.redirect("/tenders");
  }).catch((error) => {
    console.log(error);
    return res.json({
      message: "Unable to create a record!",
    });
  });
});

module.exports = router;

