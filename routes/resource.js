var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var friend_controller = require('../controllers/friend'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// friend ROUTES /// 
 
// POST request for creating a friend.  
router.post('/friend', friend_controller.friend_create_post); 
 
// DELETE request to delete friend. 
router.delete('/friend/:id', friend_controller.friend_delete); 
 
// PUT request to update friend. 
router.put('/friend/:id', friend_controller.friend_update_put); 
 
// GET request for one friend. 
router.get('/friend/:id', friend_controller.friend_detail); 
 
// GET request for list of all friend items. 
router.get('/friends', friend_controller.friend_view_all_Page); 
 
module.exports = router; 
 