const fs = require('fs'),
  conf = { encoding: 'utf8'};

function readData(pathName) {
  return new Promise ((done, error) => { 
    fs.readdir(pathName, (err, files) => err ? error(err) : done(files));
  });
};

function getFileContent(file) {
  return new Promise((done, error) => {
    fs.readFile(file, conf, (err, data) => err ? error(err) 
      : done({name: file, content: data}));
  });
};

module.exports = path => readData(path)
  .then(files => Promise.all(files.map(fileName => getFileContent(`${path}${fileName}`))));
