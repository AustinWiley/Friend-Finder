//npm package dependency
const express = require('express');
// Tells node that we are creating an "express" server
const app = express();
// Sets an initial port. To use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded(({
    extended: true
})));
app.use(express.json());

//point server to routes files
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

//LISTENER. effectively 'starts' server
app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
});

// use this in post to compare numbers
function foo(num1, num2) {
    if (num1 > num2) return num1 - num2
    return num2 - num1
}

console.log(foo(1, 8));
console.log(foo(8, 1));