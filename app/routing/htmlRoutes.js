//built in node module. help with file paths within the app
const path = require('path');

module.exports = function (app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

      app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
};