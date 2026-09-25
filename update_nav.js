const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove desktop Home nav-link line
  content = content.replace(/\s*<li><a href="index\.html" class="nav-link[^"]*">Home<\/a><\/li>/gi, '');

  // Remove mobile Home link line
  content = content.replace(/\s*<a href="index\.html" class="mobile-nav-link[^"]*">Home<\/a>/gi, '');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated nav in ${file}`);
});
