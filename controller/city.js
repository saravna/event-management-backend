var model = require('../models')

module.exports.getAllCities = (req, res) => {
    model.city.findAll({
        attributes : ['id','name']
    })
    .then(data => res.json(data))
}