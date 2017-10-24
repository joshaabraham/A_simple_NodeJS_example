var fs = require('fs');
fs.readFile('text/textSample.txt', 'utf8', function(err, data){
console.log(data);

});

fs.writeFileSync('text/Written.txt', readme);

console.log(readme);
