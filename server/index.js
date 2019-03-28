const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});