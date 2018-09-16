const fs = require('fs')
const http = require('http')
const app = http.createServer(function (req, res) {
  if (req.url === '/video') {
    let state = fs.statSync('./video.mp4')
    let video = fs.createReadStream('./video.mp4', {
      start: state.size / 2
    })
    video.on('data', function (chunk) {
      res.write(chunk)
    })
    video.on('open', (fd) => {
      res.setHeader('Content-Type', 'video/mpeg4')
      res.setHeader('Content-Range', `bytes=${state.size / 2}-`)
      res.setHeader("Content-Length", (state.size - state.size / 2 + 1));
      // res.writeHead('206', "Partial Content");
      console.log('文件已打开:', fd);
    });
    video.on('ready', (data) => {
      console.log('文件已准备好..', data);
    });
    video.on('end', () => {
      res.end()
      console.log('读取已完成..');
    });
    video.on('close', () => {
      console.log('文件已关闭！');
    });
  } else {
    res.setHeader('content-type', 'text/html')
    let html = fs.readFileSync('./video.html')
    res.end(html)
  }
})

app.listen(3456)