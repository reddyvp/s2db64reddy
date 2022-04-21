var express = require('express');
var router = express.Router();
const frndController = require('../controllers/friend')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('friend', { title: 'Search Results Friend' });
// });
/* GET costumes */ 
router.get('/', frndController.friends_view_all_Page ); 

// GET request for one costume. --lab
router.get('/friend/:name', frndController.friend_detail);

/* GET detail costume page */ 
router.get('/detail', frndController.friend_view_one_Page); 

/* GET create costume page */ 
router.get('/create', frndController.friend_create_Page);

/* GET create update page */ 
router.get('/update', frndController.friend_update_Page); 

/* GET create update page */ 
router.get('/delete', frndController.friend_delete_Page); 


module.exports = router;
