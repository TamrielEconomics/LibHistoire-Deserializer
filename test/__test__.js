const lib = require('../lib/cjs/index');
const fs = require('fs');

const txt = fs.readFileSync('./test/in.txt').toString();
const lines = txt.split('\n');
lines.forEach((line) => {
    if (line.length > 0) {
        const data = lib.Deserialize(line);
        console.log(data[1]);
        if (data[1] === '00') {
            console.log(data);
        }
    }
});

// console.log(lib.Deserialize('1;9q;1ss;f:6M:88:1:dpj#5X#O#6UQ#5X#O<10>j<4>2Bi#:2y4:5x'));
