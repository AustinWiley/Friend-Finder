let friendsData = require('../data/friends');

module.exports = function (app) {
    //get request.  collects data from `friends data`, turn it into json and send it back to the front end(the browser)
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    });

    //post request. take body from request and push data into `frindsData`.
    app.post('/api/newfriend', function (req, res) {
        console.log(req.body.name);

        let myNum = req.body.scores.map(num => parseInt(num));
        console.log(scoreTotal(myNum));



        // for (let i = 0; i < friendsData.length; i++) {

        // }
    });

    function scoreTotal(scoresArr) {
        var sum = 0;
        for (var i = 0; i < scoresArr.length; i++) {
            sum += scoresArr[i]
        }
        return sum;
    };

};