var bundle = require('browserify')(),
    fs = require('fs');


bundle.add('./getusermedia');
bundle.bundle({standalone: 'getusermedia'}).pipe(fs.createWriteStream('getusermedia.bundle.js'));
