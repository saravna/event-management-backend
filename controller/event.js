var model = require('../models')

module.exports.addEvent = (req, res) => {
    model.event.create({
        name : req.body.title,
        description : req.body.description,
        cityId : req.body.cityId,
        price : parseInt(req.body.price),
        image : req.body.image
    })
    .then(async event => {
        await req.body.schedule.map(sch => {
            event.createSchedule({
                timing : sch.timing,
                description : sch.description,
                mentorId : sch.mentor
            })
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        return
    })
    .then(result => res.json("added"))
    .catch(err => res.json("err"))


}

module.exports.getAllEvents = (req, res) => {
    model.event.findAll({
        include : [
            {
                attributes : ['name'],
                model : model.city
            },
            {
            model : model.schedule,
            include : [model.mentor]
            }
        ]
    }).then(result => res.json(result))
}

module.exports.getEventsByCity = (req, res) => {
    var id = req.params.id
    model.event.findAll({
        where : {
            cityId : id
        }
    })
    .then(data => res.json(data))
}
module.exports.getEventById = (req, res) => {
    console.log("hit")
    var id=parseInt(req.params.id)
    console.log(id)
    model.event.findOne({
        where : {
            id 
        },
        include : [
            {
                attributes : ['name'],
                model : model.city
            },
            {
                model : model.schedule,
                include : [model.mentor]
            }
        ]
    })
    .then(data => {
        console.log(data)
        return res.json(data)
    })
    .catch(err => console.log(err))
}