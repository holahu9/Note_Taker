// creating an express server
const express = require('express');
const app = express();
const fs = require("fs")
// set up a port -- check if there is a process of envirment ofport. if doesn't see this port, check 8080.
const PORT = process.env.PORT || 8080;

// handling data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// file directory
app.use( express.static( __dirname + '/Develop/public' ));
app.use( express.static( __dirname + '/Develop/public/assets/js'));

//router

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);



// this is to start the server 

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

  