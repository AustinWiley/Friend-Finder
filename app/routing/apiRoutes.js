let friendsData = require('../data/friends');

module.exports = function () {
    //get request.  collects data from `friends data`, turn it into json and send it back to teh front end(the browser)
    app.get('/api/friends' function(req,res) {
        res.json(frindsData);
    });

    //post request. take body from request and push data into `frindsData`.
    app.post('api/friends' function (req, res) {
        console.log(req.body);
    })
    
};