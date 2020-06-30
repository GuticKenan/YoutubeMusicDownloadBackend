const express = require('express');
const app = express();
const path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
const { YTDownload } = require('./youtubemp3');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', async (req, res) => {
  const { path, videoId, title } = req.body;

  if (!videoId || !title || !path) {
    return res.status(400);
  }

  startDownload(videoId, title, path, () => {
    res.json({
      status:200,
      message: 'Success'
    });
  });
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running!');
});

startDownload = function (videoId, title, path, callback) {
  try {
    YTDownload(videoId, title, path, callback);
  } catch (e) {
    console.error(e);
  }
};
