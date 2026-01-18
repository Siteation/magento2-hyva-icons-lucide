const fs = require("fs");
const path = require("path");
const newVersion = process.argv[2];

if (!newVersion) {
    console.error("❌ Error: Please provide a version number.");
    console.error("Usage: node update-version.js 1.0.1");
    process.exit(1);
}

const composerPath = path.join(__dirname, "..", "composer.json");

try {
    const fileContent = fs.readFileSync(composerPath, "utf8");
    const jsonContent = JSON.parse(fileContent);

    console.log(`Current version: ${jsonContent.version}`);
    jsonContent.version = newVersion;
    fs.writeFileSync(composerPath, JSON.stringify(jsonContent, null, 2) + "\n");
    console.log(`✅ composer.json updated to version: ${newVersion}`);
} catch (error) {
    console.error("❌ Error updating composer.json:", error.message);
    process.exit(1);
}
