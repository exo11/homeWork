const fs = require('fs'),
  conf = { encoding: 'utf8' };

exports.read = (file) => new Promise((done, fail) => {
  fs.readFile(file, conf, (err, content) =>  err ? fail(err) : done(content));
});

exports.write = (file, data) => new Promise ((done, fail) => {
  fs.writeFile(file, data, conf, (err) => err ? fail(err) : done(file));
});

