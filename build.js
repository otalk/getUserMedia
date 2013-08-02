var bundle = require('browserify')(),
    fs = require('fs');


bundle.add('./getusermedia');
bundle.bundle({standalone: 'getUserMedia'}).pipe(fs.createWriteStream('getusermedia.bundle.js'));
