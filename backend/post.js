const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();
const Post = require('./models/post');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const timestamp = new Date().getTime().valueOf();
    const filename = timestamp + ext;
    cb(null, filename);
  },
});

const upload = multer({ storage });

const postCotroller = require('./controllers/post');

router.get('/', async (req, res) => {
  const posts = await Post.find({});
  console.log(posts);
  res.send(posts);
});

router.get('/:title', async (req, res) => {
  const title = req.params.title;
  const data = await Post.find({ title });

  console.log(data);
  res.send(data);
});

router.post('/register', upload.single('image'), async (req, res) => {
  console.log(req.body);

  const postData = req.body;
  const existsPost = await Post.find({ title: postData['title'] });

  if (existsPost.length > 0) {
    return res.status(400).json({
      status: 'error',
      error: 'already exist title',
    });
  }

  const post = new Post(postData);
  post.save();

  res.status(200).json({
    status: 'success post register',
  });
});

module.exports = router;
