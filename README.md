# videojs-jogwheel [![Build Status](https://travis-ci.org/mwri/videojs-jogwheel.svg?branch=master)](https://travis-ci.org/mwri/videojs-jogwheel)

## Usage

Include **dist/videojs-jogwheel-es5.js** or incorporate it in a
bundle with webpack. The plugin will automatically be registered
with [video.js](https://github.com/videojs/video.js).

Enable the plugin for an instance of the player like this:

```javascript
const videojsJogWheel = require("videojs-jogwheel").default;

let player = videojs('my-player', {
  plugins: { 'jogWheel': videojsJogWheel }
});

```

Now wizz the mouse wheel back and forth over the video.

## Build

run `npm install` to install the dependencies, and `grunt build` to
build (or `./node_modules/.bin/grunt build` if you do not have
grunt, grunt CLI locally installed.

This will run code checkers and linters and the test suite, report on
coverage and build build `dist/videojs-jogwheel-es5.js`, an ES5 babel
transpile of the ES6 source.

Running `grunt watch:build` will watch for changes to the source or
tests and invoke the full build cycle when they are detected. Running
`grunt watch:test` will again watch for changes, and invoke the most
light weight possible file test cycle.

Note that in the event of stack traces being output during the full
build, with coverage reports, the stack trace line numbers will be
broken. Run `test` or `watch:test` for valid stack traces instead
of `build`.
