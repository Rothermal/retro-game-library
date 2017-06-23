"use strict";

const path = require('path');

// we define some paths to be used throughout the webpack config

module.exports = {
    src: path.join(__dirname, 'client/src'),
    dist: path.join(__dirname, 'client/dist'),
    css: path.join(__dirname, 'client/dist/css')
};
