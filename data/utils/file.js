const fs = require('fs')

function readJSON(filePath) {
    const buffer = fs.readFileSync(filePath)
    const data = buffer.toString().split('\n').filter(item => item !== '')
    return data.map(item => JSON.parse(item))
}

function writeJSON(filePath, data) {
    const string = data.map(item => JSON.stringify(item)).join('\n') + '\n'
    fs.writeFileSync(filePath, string)
}

module.exports = { readJSON, writeJSON }
