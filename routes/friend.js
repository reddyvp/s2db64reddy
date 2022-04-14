var express = require('express');
var router = express.Router();
const frndController = require('../controllers/friend')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('friend', { title: 'Search Results Friend' });
// });
/* GET costumes */ 
router.get('/', frndController.friend_view_all_Page ); 

module.exports = router;
