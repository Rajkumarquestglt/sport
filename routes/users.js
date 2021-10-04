var express = require('express');
var router = express.Router();
const AuthController=require('../controllers/auth/AuthController');
const TeamController=require('../controllers/team/TeamController');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/wallet-balance', function(req, res, next) {
  res.render('wallet-balance');
});
router.post('/login',AuthController.login);    
router.get('/buy-team',TeamController.buyTeam);
router.get('/wallet',AuthController.getAvailableBalance);
router.get('/token-data',AuthController.getTokenData);
router.get('/assign-pool',TeamController.assignPool);
router.get('/players-nft',AuthController.playersNft);

router.get('/crypto-punk',AuthController.getCryptoPunk);

module.exports = router;
