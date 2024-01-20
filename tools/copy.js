const fs = require('fs');

(function main() {
    let tempFile = fs.createReadStream('package.json').pipe(fs.createWriteStream('dist/package.json'));
    tempFile.on('close', () => {
        const packageJson = JSON.parse(fs.readFileSync('./dist/package.json').toString());
        delete packageJson.devDependencies;
        fs.writeFileSync('./dist/package.json', JSON.stringify(packageJson, null, 2));
    });
})();
