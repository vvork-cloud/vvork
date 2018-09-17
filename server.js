//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
// app.use(express.static(__dirname + '/dist/<to_your_project_name>'));
app.use(express.static(__dirname + '/dist/vvork'));

app.get('*', function (req, res) {
    // Replace the '/dist/<to_your_project_name>/index.html'
    // res.sendFile(path.join(__dirname + '/dist/<to_your_project_name>/index.html'));
    res.sendFile(path.join(__dirname + '/dist/vvork/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

// heroku create angular-deploy018
// heroku git: remote - a angular-deploy018
// git add .
// git commit -m 'Commit Name'
// git push heroku master
// heroku open