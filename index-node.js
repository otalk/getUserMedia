// Once there is an equivalent of getUserMedia for node.js,
// we'll update this to use it.
module.exports = function (constraints, cb) {
    if (typeof navigator !== 'undefined') {
      // Support Electron renderer processes
      return require('./index-browser')(constraints, cb);
    }

    var haveOpts = arguments.length === 2;

    // make constraints optional
    if (!haveOpts) {
        cb = constraints;
    }

    var error = new Error('MediaStreamError');
    error.name = 'NotSupportedError';
    return cb(error);
};
