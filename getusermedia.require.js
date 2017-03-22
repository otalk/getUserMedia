define([], function(){
    // requireJS wrapper by @epoberezkin to module by @HenrikJoreteg
    var getUserMedia = (navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia);


    return function (constraints, cb) {
        var defaultOpts = {video: true, audio: true};
        var error;
        var denied = 'PERMISSION_DENIED';
        var notSatified = 'CONSTRAINT_NOT_SATISFIED';

        // make constraints optional
        if (arguments.length < 2) {
            cb = constraints;
            constraints = defaultOpts;
        }

        // treat lack of browser support like an error
        if (! getUserMedia) {
            // throw proper error per spec
            error = new Error('NavigatorUserMediaError');
            error.name = 'NOT_SUPPORTED_ERROR';
            return cb(error);
        }

        getUserMedia.call(navigator, constraints,
            function (stream) {
                cb(null, stream);
            },
            function (err) {
                var error;

                normalizeError();
                cb(error);

                function normalizeError() {
                    // coerce into an error object since FF gives us a string
                    // there are only two valid names according to the spec
                    // we coerce all non-denied to "constraint not satisfied".
                    if (typeof err === 'string') {
                        error = new Error('NavigatorUserMediaError');
                        error.name = err == denied
                                        ? denied
                                        : notSatified;

                    } else {
                        // if we get an error object make sure '.name' property is set
                        // according to spec: http://dev.w3.org/2011/webrtc/editor/getusermedia.html#navigatorusermediaerror-and-navigatorusermediaerrorcallback
                        error = err;
                        if (! error.name) {
                            // this is likely chrome which
                            // sets a property called "ERROR_DENIED" on the error object
                            // if so we make sure to set a name
                            err.name = error[denied]
                                        ? denied
                                        : notSatified;
                        }
                    }
                }
            } // error callback
        );
    }; // function returned by module

}); // define
