var friend = require('../models/friend'); 
 
// List of all friends 
// VIEWS 
// Handle a show all view 
exports.friend_view_all_Page = async function(req, res) { 
    try{ 
        thefriends = await friend.find(); 
        console.log(thefriends)
        // res.send(thefriends)
        res.render('friend', { title: 'Friend Search Results', results: thefriends }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// for a specific friend. 
exports.friend_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: friend detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.friend_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new friend(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name; 
    document.age = req.body.age; 
    document.height = req.body.height; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// Handle friend delete form on DELETE. 
exports.friend_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: friend delete DELETE ' + req.params.id); 
}; 
 
// Handle friend update form on PUT. 
exports.friend_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: friend update PUT' + req.params.id); 
}; 