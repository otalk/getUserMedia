(function(e){if("function"==typeof bootstrap)bootstrap("getusermedia",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeGetusermedia=e}else"undefined"!=typeof window?window.getusermedia=e():global.getusermedia=e()})(function(){var define,ses,bootstrap,module,exports;
return (function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
// getUserMedia helper by @HenrikJoreteg
var func = (navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia);


module.exports = function (contstraints, cb) {
    var options;
    var haveOpts = arguments.length === 2;
    var defaultOpts = {video: true, audio: true};

    // make contstraints optional
    if (!haveOpts) {
        cb = contstraints;
        contstraints = defaultOpts;
    }

    // treat lack of browser support like an error
    if (!func) return cb(new Error('notSupported'));

    func.call(navigator, contstraints, function (stream) {
        cb(null, stream);
    }, function (err) {
        cb(err);
    });
};

},{}]},{},[1])(1)
});
;