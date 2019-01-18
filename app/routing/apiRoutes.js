let friendsData = require('../data/friends');

module.exports = function () {
    //get request.  collects data from `friends data`, turn it into json and send it back to teh front end(the browser)
    app.get('/api/friends' function(req,res) {
        res.json(frindsData);
    });
    
};