const fs = require('fs');

// Get source and target file paths from command-line arguments
const [, , sourceFilePath, targetFilePath] = process.argv;

if (!sourceFilePath || !targetFilePath) {
  console.error(
    'Usage: node createConfig.js <sourceFilePath> <targetFilePath>',
  );
  process.exit(1);
}

fs.copyFile(sourceFilePath, targetFilePath, (err) => {
  if (err) {
    console.error('Error  creating config:', err);
  } else {
    console.log('Config created successfully.');
  }
});
