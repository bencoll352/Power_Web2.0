const fs = require('fs');
const content = fs.readFileSync('live_bundle.js', 'utf8');

const regex = /"([^"\\]{15,300})"/g;
let match;
const strings = new Set();

while ((match = regex.exec(content)) !== null) {
  const str = match[1].trim();
  if (
    !str.includes('http') &&
    !str.includes('xmlns') &&
    !str.includes('d=') &&
    !str.includes('flex') &&
    !str.includes('px-') &&
    !str.includes('bg-') &&
    /[a-zA-Z]{5,}/.test(str)
  ) {
    strings.add(str);
  }
}

fs.writeFileSync('extracted_strings.txt', Array.from(strings).join('\n---\n'));
console.log('Successfully extracted', strings.size, 'strings.');
