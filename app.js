// creating an express server
const express = require('express');
const app = express();

// set up a port 
const PORT = process.env.PORT || 3000;

// handling data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// this is to start the server 

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

  