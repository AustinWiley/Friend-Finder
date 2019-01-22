let friendsData = require('../data/friends');

module.exports = function (app) {
    //get request.  collects data from `friends data`, turn it into json and send it back to the front end(the browser)
    app.get('/api/friends', function(req,res) {
        res.json(friendsData);
    });

    //post request. take body from request and push data into `frindsData`.
    app.post('/api/newfriend', function (req, res) {
        console.log(req.body.name);
    });
    
};