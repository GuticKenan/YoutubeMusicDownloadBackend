var YoutubeMp3Downloader = require('youtube-mp3-downloader');
const pathToFfmpeg = require('ffmpeg-static');

const _path = process.env.USERPROFILE + '\\' + 'Downloads' + '\\';

var YD = new YoutubeMp3Downloader({
  ffmpegPath: pathToFfmpeg,
  outputPath: _path,
  youtubeVideoQuality: 'highest',
  queueParallelism: 2,
  progressTimeout: 2000,
});

function YTDownload(videoId, title) {
	console.log(_path);
  YD.download(
    videoId,
    title.replace('|', '').replace(/[^a-zA-Z0-9]/g,'') + Math.random().toString()
  );
}
module.exports = {
  YTDownload,
};
