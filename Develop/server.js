// Dependencies
const express = require('express');

// app use express
const app = express();


const PORT = process.env.PORT || 3001;


// asks express to create a route for every file in the 'public' folder and give it a '/' route
app.use(express.static('public'));
// This will set up the express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes to route files
require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);


// This will start the server
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});