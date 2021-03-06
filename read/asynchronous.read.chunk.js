// @ts-nocheck
const {stat, open, read} = require('fs');

module.exports.read = () => {
  
  let totalSize = 0;
  
  stat('./data/app.log', (err, {size}) => totalSize = size);
  
  open('./data/app.log', 'r', (err, fd) => {
    const buffer = Buffer.alloc(200);
    for (let i = 0; i <= totalSize / buffer.length; i++) {
      read(fd, buffer, 0, buffer.length, i*buffer.length, (err,count, buff ) => {
        console.log(buff.toString());
      })
    }
  })
}

