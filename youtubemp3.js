var YoutubeMp3Downloader = require('youtube-mp3-downloader');
const pathToFfmpeg = require('ffmpeg-static');



function YTDownload(videoId, title, path, callback) {
  var YD = new YoutubeMp3Downloader({
    ffmpegPath: pathToFfmpeg,
    outputPath: path,
    youtubeVideoQuality: 'highest',
    queueParallelism: 2,
    progressTimeout: 2000,
  });

  YD.download(
    videoId,
    title.replace('|', '').replace(/[^a-zA-Z0-9]/g,'') + Math.random().toString()
  );

  YD.on("finished", function(err, data) {
    callback();
});
}
module.exports = {
  YTDownload,
};
