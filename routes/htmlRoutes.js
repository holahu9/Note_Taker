// path package

const path = require('path');

// routing

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
    console.log(__dirname);
  });

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  //  default to home page if no matching
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};