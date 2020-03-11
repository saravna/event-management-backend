var model = require('../models')
var jwt = require('jsonwebtoken')
var {Op} = require('sequelize')

module.exports.addBooking = (req,res) => {
    console.log(req.body)
    model.user.findOne({
        where : {
            username : req.body.username
        }
    })
    .then(user => {
        return model.bookings.create({
            userId : user.id,
            eventId : req.body.eventId
        })
        .then(data => res.json(data))
    })
}

module.exports.getBookingsByUser = (req, res) => {
    model.user.findOne({
        where : {
            username : req.body.username
        }
    })
    .then(user => {
        model.bookings.findAll({
            attributes : ['eventId'],
            where : {
                userId : user.id
            }
        })
        .then(data => {
            model.event.findAll({
                attributes : ['id','name','price'],
                where : {
                    [Op.or] : data.map(event=>{
                        return {
                            id : event.eventId
                        }
                    })
                },
                include : [{model :model.city,attributes:['name']}]
            })
            .then(data => res.json(data))
        })
    })
}

module.exports.removeBooking = (req, res) => {
    model.user.findOne({
        attributes : ['id'],
        where : {
            username : req.body.username
        }
    })
    .then(user=> user.dataValues.id)
    .then(id => {
        model.bookings.destroy({
            where : {
                [Op.and] : [
                    {userId : id},
                    {eventId : req.body.eventId}
                ]
            }
        })
        .then(data => res.json(data))
    })
}