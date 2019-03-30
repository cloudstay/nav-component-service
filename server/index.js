const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
const port = process.env.PORT || 3003;
let Listings = require('../database/schema.js')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
app.use(express.static(path.join(__dirname, '../public')));


// get request
app.get('/api/rooms', function(req, res) {
  console.log('Received get request for listings: ', req.query)
  Listings.find({listing_id: req.query.id}).exec((lists) => {
    res.json(lists);
  });
})

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});