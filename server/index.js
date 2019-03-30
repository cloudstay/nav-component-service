const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
const port = process.env.PORT || 3003;
const db = require('../database/index.js')
let Listings = require('../database/schema.js')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
app.use(express.static(path.join(__dirname, '../public')));


// get request
app.get('/api/rooms/:id', function(req, res) {
  console.log('Received get request for listings: ', req.params)
  // Listings.find({listing_id: req.params.id}).exec((lists) => {
  //   res.json(lists);
  // });
  Listings.find({listing_id: req.params.id}, function(err, docs) {
    if(err) {
      console.log('err', err)
    }
    console.log('docs', docs)
    res.send(docs)
  });
})

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});