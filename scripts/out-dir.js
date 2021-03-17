'use strict';

const path = require('path');
const fs = require('fs');

const dist = path.join(path.dirname(__dirname), 'dist');

fs.mkdirSync(dist, { recursive: true });

module.exports = dist;
