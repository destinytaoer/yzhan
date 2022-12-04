const { readJSON, writeJSON } = require('./utils/file')
const { getDate, updateOldDate } = require('./utils/date')

const materials = readJSON('./material.json')
const teabags = readJSON('./teabag.json')

const newMaterials = updateOldDate(materials)
const newTeabags = updateOldDate(teabags)

writeJSON('./material.json', newMaterials)
writeJSON('./teabag.json', newTeabags)
// console.log(newMaterials)
