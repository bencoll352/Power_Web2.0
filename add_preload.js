const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Add preload="auto" to <video> tags if missing
  content = content.replace(/<video\s+(?![^>]*preload="auto")/gi, '<video preload="auto" ');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Ensured video preload="auto" in ${file}`);
});
