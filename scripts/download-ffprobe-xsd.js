'use strict';

const { default: fetch } = require('node-fetch');
const path = require('path');
const fs = require('fs');

const outDir = require('./out-dir');

(async () => {
  const res = await fetch('https://raw.githubusercontent.com/FFmpeg/FFmpeg/master/doc/ffprobe.xsd');
  res.body.pipe(fs.createWriteStream(path.join(outDir, 'ffprobe.xsd')));
})();
