(function () {
  "use strict";
  
  var connect = require('connect')
    , fs = require('fs')
    , path = __dirname
    , port = 1337
    ;

  if((parseFloat(process.argv[2]) == parseInt(process.argv[2])) && !isNaN(process.argv[2])) {
    port = process.argv[2];
  }

  if(typeof process.argv[3] !== 'undefined' && fs.statSync(process.argv[3]).isDirectory()) {
    if(process.argv[3].substring(0,1) == '/') {
      path = process.argv[3];
    } else {
      path = __dirname + '/' + process.argv[3];
    }
  }
  
  connect.createServer(
      connect.static(path)
    , connect.directory(path)
  ).listen(port);

  console.log("Now serving on port " + port + ".");

}());
