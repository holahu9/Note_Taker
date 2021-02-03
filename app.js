// creating an express server
const express = require('express');
const app = express();

// set up a port 
const PORT = process.env.PORT || 3000;

// handling data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// file directory
app.use( express.static( __dirname + '/Develop/public' ));
app.use( express.static( __dirname + '/Develop/public/assets/js'));

//router

require('./Develop/routes/apiRoutes')(app);
require('./Develop/routes/htmlRoutes')(app);

// this is to start the server 

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

  