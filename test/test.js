'use strict';
// This is a basic test file for use with testling.
// The test script language comes from tape.
/* jshint node: true */
/* global Promise */
var test = require('tape');

var getUserMedia = require('../index-browser.js');
var adapter = require('webrtc-adapter-test');

test('getUserMedia audio-only', function (t) {
  var constraints = {audio: true};
  if (adapter.webrtcDetectedBrowser === 'firefox') constraints.fake = true;
  getUserMedia(constraints, function (err, stream) {
    if (err) {
        t.fail(err.toString());
        return;
    }
    t.pass('got stream');
    t.end();
  });
});

test('getUserMedia video-only', function (t) {
  var constraints = {video: true};
  if (adapter.webrtcDetectedBrowser === 'firefox') constraints.fake = true;
  getUserMedia(constraints, function (err, stream) {
    if (err) {
        t.fail(err.toString());
        return;
    }
    t.pass('got stream');
    t.end();
  });
});

test('getUserMedia audio-video', function (t) {
  var constraints = {audio: true, video: true};
  if (adapter.webrtcDetectedBrowser === 'firefox') constraints.fake = true;
  getUserMedia(constraints, function (err, stream) {
    if (err) {
        t.fail(err.toString());
        return;
    }
    t.pass('got stream');
    t.end();
  });
});
