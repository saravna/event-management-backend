var model = require('../models')

module.exports.addMentor = (req, res) => {
    model.mentor.create({
        name : req.body.name,
        linkedIn : req.body.linkedIn,
        image : req.body.image
    })   
    .then(data => res.json(data))
}

module.exports.getAllMentors = (req,res) => {
    model.mentor.findAll({
    })
    .then(mentors => res.json(mentors.map(mentor => mentor.dataValues)))
}