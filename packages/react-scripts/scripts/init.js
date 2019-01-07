const init = require('react-scripts/scripts/init');
const path = require('path');
const fs = require('fs');

module.exports = (...args) => {
    init(...args);

    const [appPath] = args;
    const packagePath = path.join(appPath, 'package.json');

    const package = require(packagePath);

    Object.keys(package.scripts).forEach(name => {
        package.scripts[name] = package.scripts[name].replace('react-scripts', '@react-app/react-scripts');
    })

    fs.writeFileSync(
        packagePath,
        JSON.stringify(package, null, 2),
    );
}