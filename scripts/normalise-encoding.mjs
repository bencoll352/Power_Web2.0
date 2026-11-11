import fs from 'node:fs';
// Repair punctuation which an earlier editor saved as decoded Windows-1252.
const replacements=[['â€™','’'],['â€˜','‘'],['â€œ','“'],['â€\u009d','”'],['â€“','–'],['â€”','—'],['â†—','↗'],['â˜°','☰'],['âœ“','✓'],['Â£','£'],['Â©','©'],['Â·','·'],['â€¢','•']];
const file='build.mjs';let text=fs.readFileSync(file,'utf8');
for(const [before,after] of replacements)text=text.split(before).join(after);
fs.writeFileSync(file,text);
console.log('Normalised existing template punctuation.');
const css='dist/professional.css';
fs.writeFileSync(css,fs.readFileSync(css,'utf8').replace('190px minmax(0,1fr))','190px minmax(0,1fr)'));
