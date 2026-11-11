const fs = require('fs');
const content = fs.readFileSync('extracted_strings.txt', 'utf8');

const lines = content.split('\n---\n');

const relevant = lines.filter(l => 
  l.includes('electrical') ||
  l.includes('headhunting') ||
  l.includes('manufacturing') ||
  l.includes('distribution') ||
  l.includes('placement') ||
  l.includes('client') ||
  l.includes('talent') ||
  l.includes('coaching') ||
  l.includes('executive') ||
  l.includes('retention') ||
  l.includes('territory')
);

fs.writeFileSync('filtered_highlights.txt', relevant.slice(0, 150).join('\n---\n'));
console.log('Filtered highlights count:', relevant.length);
