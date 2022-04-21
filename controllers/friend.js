var friend = require('../models/friend');

// List of all friends 
// VIEWS 
// Handle a show all view 
exports.friend_view_all_Page = async function (req, res) {
    try {
        thefriends = await friend.find();
        console.log(thefriends)
        res.send(thefriends)
        // res.render('friend', { title: 'Friend Search Results', results: thefriends }); 
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle a show all view 
exports.friends_view_all_Page = async function (req, res) {
    try {
        thefriends = await friend.find();
        console.log(thefriends)
        // res.send(thefriends)
        res.render('friend', { title: 'Friend Search Results', results: thefriends });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// for a specific friend. 
exports.friend_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: friend detail: ' + req.params.id);
};

// Handle friend create on POST. 
exports.friend_create_post = async function (req, res) {
    console.log(req.body)
    let document = new friend();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"friend_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name;
    document.age = req.body.age;
    document.height = req.body.height;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific friend. --lab
exports.friend_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await friend.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


// Handle friend delete form on DELETE. 
exports.friend_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: friend delete DELETE ' + req.params.id);
};

// Handle friend update form on PUT. 
exports.friend_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await friend.findById(req.params.id)
        // Do updates of properties 
        if (req.body.name)
            toUpdate.name = req.body.name;
        if (req.body.age) toUpdate.age = req.body.age;
        if (req.body.height) toUpdate.height = req.body.height;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};
// Handle friend delete on DELETE. 
exports.friend_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await friend.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query 
exports.friend_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await friend.findById(req.query.id)
        res.render('frienddetail',
            { title: 'Friend Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
    // Handle building the view for creating a friend. 
    // No body, no in path parameter, no query. 
    // Does not need to be async 
    exports.friend_create_Page = function (req, res) {
        console.log("create view")
        try {
            res.render('friendcreate', { title: 'friend Create' });
        }
        catch (err) {
            res.status(500)
            res.send(`{'error': '${err}'}`);
        }
    };

    // Handle building the view for updating a friend. 
// query provides the id 
exports.friend_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await friend.findById(req.query.id) 
        res.render('friendupdate', { title: 'friend Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

//Handle a delete one view with id from query 
exports.friend_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await friend.findById(req.query.id) 
        res.render('frienddelete', { title: 'friend Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 