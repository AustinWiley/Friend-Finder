let friendsData = require('../data/friends');

module.exports = function (app) {
    //get request.  collects data from `friends data`, turn it into json and send it back to the front end(the browser)
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    });

    //post request. take body from request and push data into `frindsData`.
    app.post('/api/newfriend', function (req, res) {
        console.log(req.body.name);

        // let myNum = req.body.scores.map(num => parseInt(num));
        // console.log(scoreTotal(myNum));

        let myNum = scoreTotal(req.body.scores);
        let friendsTotals = [];
        let diff = [];

        //loop to get friends totals
        for (let i = 0; i < friendsData.length; i++) {
            friendsTotals.push(scoreTotal(friendsData[i].scores))
        };

        //loop for the difference between user scores and friends scores
        for (let j = 0; j < friendsTotals.length; j++) {
            diff.push(foo(friendsTotals[j], myNum))
        };

        // console.log('this is your friend' + diff.indexOf(Math.min(diff)));
        console.log('totals' + friendsTotals);
        console.log('diff' + diff);
        console.log('this is friend index ' + diff.indexOf(Math.min(...diff)));



        //after everything
        res.json(friendsData[diff.indexOf(Math.min(...diff))]);
        friendsData.push(req.body);
    });

    function scoreTotal(scoresArr) {
        var sum = 0;
        for (var i = 0; i < scoresArr.length; i++) {
            sum += parseInt(scoresArr[i])
        }
        return sum;
    };

    // use this in post to compare numbers
    function foo(num1, num2) {
        console.log(typeof num1)
        console.log(typeof num2)
        console.log(num2)
        if (num1 > num2) return num1 - num2
        return num2 - num1
    };

    // console.log(foo(1, 8));
    // console.log(foo(8, 1));
};