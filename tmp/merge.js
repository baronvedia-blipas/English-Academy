const fs = require('fs');
const path = require('path');

const basePath = 'c:/AntigravityProjects/English-Academy/tmp';
const chunks = ['chunk1.js', 'chunk2.js', 'chunk3.js', 'chunk4.js'];

let combinedChunks = [];
for (let chunkFile of chunks) {
    const content = fs.readFileSync(path.join(basePath, chunkFile), 'utf8');
    combinedChunks.push(content);
}

const targetPath = 'c:/AntigravityProjects/English-Academy/frontend/src/content/grammarData.js';
let grammarFile = fs.readFileSync(targetPath, 'utf8');

// The file should cleanly end with '];'
if (grammarFile.includes('];')) {
    const insertion = ',\n' + combinedChunks.join(',\n') + '\n];';
    // Replace the LAST occurrence of '];' in case there are others inside strings, though unlikely
    const lastIndex = grammarFile.lastIndexOf('];');
    grammarFile = grammarFile.substring(0, lastIndex) + insertion + grammarFile.substring(lastIndex + 2);

    fs.writeFileSync(targetPath, grammarFile);
    console.log('Successfully merged all chunks into grammarData.js');
} else {
    console.error('Could not find closure "];" in grammarData.js');
}
