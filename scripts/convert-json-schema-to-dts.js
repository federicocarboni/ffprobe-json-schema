'use strict';

const path = require('path');
const fs = require('fs');

const j2ts = require('json-schema-to-typescript');

const outDir = require('./out-dir');

(async () => {
  const ts = await j2ts.compileFromFile(path.join(outDir, 'ffprobe.json'));
  fs.writeFileSync(path.join(outDir, 'ffprobe.d.ts'), ts);
})();
