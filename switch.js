var fs = require('fs');

fs.readdir('./', (err, files) => {
  files.forEach(file => {
    var file_data = file.split('.')
    if(file_data[1] == 'html'){
      fs.readFile(file, function(err, data) {
        if(err)  {
          console.log("Error");
        } else {
          var result = data.replace(/(<script src='js/jquery.min.js' type='text/javascript'></script>)/g, 'replacement');

          fs.writeFile(someFile, result, 'utf8', function (err) {
             if (err) return console.log(err);
          });
        }
      })
    }
  });
})
