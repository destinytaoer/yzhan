const { readJSON, writeJSON } = require('./utils/file')
const { getDate, updateOldDate } = require('./utils/date')

// const materials = readJSON('./material.json')
// const teabags = readJSON('./teabag.json')

// const newMaterials = updateOldDate(materials)
// const newTeabags = updateOldDate(teabags)

// writeJSON('./material.json', newMaterials)
// writeJSON('./teabag.json', newTeabags)
// console.log(newMaterials)

const teabags = readJSON('./teabag.json')

const stock = teabags.map(teabag => ({
    _id: `TB-${teabag._id}`,
    _openid: teabag._openid,
    type: 'TEABAG',
    name: teabag.name,
    remnant_inventory: 0,
    batch_list: []
}))

writeJSON('./stock.json', stock)
