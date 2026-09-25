const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove theme-toggle button block
  content = content.replace(/\s*<button class="theme-toggle" id="themeToggle"[\s\S]*?<\/button>/gi, '');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Removed theme toggle from ${file}`);
});
