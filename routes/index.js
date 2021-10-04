var express = require('express');
var router = express.Router();
const PrizeController=require('../controllers/PrizePool/PrizeController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create-pool',PrizeController.createPool);

module.exports = router;
