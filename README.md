# getUserMedia

## What?

Tiny cross-browser module that wraps `navigator.getUserMedia` and gives us cleaner error-first API and cross-browser handling. No browser support checking necessary, lack of support is treated in the same way as when the user rejects the request: the callback gets passed an error as the first argument.

Suitable for use with browserify/commonJS on the client.

## Installing

```
npm install getusermedia
```

## API

vanilla JS example

```js
// first deal with browser prefixes
var getUserMedia = (navigator.getUserMedia || 
    navigator.mozGetUserMedia || 
    navigator.webkitGetUserMedia).bind(navigator);

getUserMedia(
    // media constraints
    {video: true, audio: true}, 
    // success callback
    function (stream) {
        // gets stream if successful
    }, 
    // error callback
    function (error) {
        // called if failed to get media
    }
)

navigator.webkitGetUserMedia(CONSTRAINTS, SUCCESSCALLBACK, ERRORCALLBACK);
```

Our version:

```js
var getUserMedia = require('getUserMedia');

// constraints are optional
// defaults to {audio: true, video: true};
getUserMedia(function (err, stream) {
    if (err) {
       console.log('failed');
    } else {
       console.log('got a stream', stream);  
    }
});
```

```js
// or pass constraints and they get passed through to real function
getUserMedia({video: true, audio: false}, function (err, stream) { ... });
```

## License

MIT

## Created By

If you like this, follow: [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter.

