const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('combined'));

const postRouter = require('./post');
const userRouter = require('./user');

app.use('/api/post', postRouter);
app.use('/api/user', userRouter);

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch((e) => console.error(e));

app.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World');
});
