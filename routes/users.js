var express = require('express');
var router = express.Router();
const AuthController=require('../controllers/auth/AuthController');
const TeamController=require('../controllers/team/TeamController');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',AuthController.login);
router.get('/buy-team',TeamController.buyTeam);

module.exports = router;
