function getDate(date) {
    if (date) {
        return {
            "$date": date
        }
    }
    return {
        "$date": new Date().toISOString()
    }
}

function updateOldDate(data) {
    return data.map(item => ({
        ...item,
        created_at: getDate(item.created_at),
        updated_at: getDate(item.updated_at),
    }))
}

module.exports = { getDate, updateOldDate }
