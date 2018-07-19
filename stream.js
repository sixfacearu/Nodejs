var fs=require('fs');

var read=fs.createReadStream('sixface.txt');

var write=fs.createWriteStream('a.txt');

read.pipe(write);