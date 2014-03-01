var bundle = require('browserify')(),
    fs = require('fs');


bundle.add('./index-browser');
bundle.bundle({standalone: 'getUserMedia'}).pipe(fs.createWriteStream('getusermedia.bundle.js'));
