const express = require('express');

const router = express.Router();
const User = require('./models/user');

router.post('/register', async (req, res) => {
  console.log(req.body);

  const userData = req.body;
  const existsUser = await User.find({ ID: userData['ID'], Email: userData['Email'], Nickname: userData['Nickname'] });

  if (existsUser.length > 0) {
    return res.status(400).json({
      status: 'error',
      error: 'already exist user',
    });
  }

  const user = new User(userData);
  user.save();

  res.status(200).json({
    status: 'success user register',
  });
});

router.post('/login', async (req, res) => {
  const userData = req.body;

  await User.find();
});

module.exports = router;
