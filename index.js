const express = require('express');
const app = express();

var cors = require('cors');
var bodyParser = require('body-parser');
const { YTDownload } = require('./youtubemp3');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', async (req, res) => {
  const { videoId, title } = req.body;

  if (!videoId || !title) {
    return res.status(400);
  }

  await startDownload(videoId, title);
  res.send('Success!');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});

async function startDownload(videoId, title) {
  try {
    YTDownload(videoId, title);
  } catch (e) {
    console.error(e);
  }
}