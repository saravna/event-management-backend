var model = require('../models')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')
const { Op } = require('sequelize')

module.exports.signin = (req, res) => {
    model.user.findAll({
        attributes : ['id','username','password','role'],
        where : {
            [Op.or] : [
                { username : req.body.username},
                { mail : req.body.username}
            ]
        }
    }).then(result => {
        if(result[0].dataValues.role === 'USER') {
            if(bcrypt.compareSync(req.body.password,result[0].dataValues.password)){
                jwt.sign(
                    { user : result[0].dataValues.username,id:result[0].dataValues.id},
                    'secret_key',
                    {expiresIn : '30m'},
                    (err, token) => {
                        res.json({authToken : token})
                    }
                )
            }
        } else if(result[0].dataValues.role === 'ADMIN') {
            if(bcrypt.compareSync(req.body.password,result[0].dataValues.password)){
                jwt.sign(
                    { user : result[0].dataValues.username},
                    'secret_key',
                    {expiresIn : '30m'},
                    (err, token) => {
                        console.log(err,token)
                        res.json({adminToken : token})
                    }
                )
            }
        }
    })
}

module.exports.signup = (req, res) => {
    var hash = bcrypt.hashSync(req.body.password,10)
    model.user.create({
        username : req.body.username,
        mail : req.body.mail,
        password : hash,
        role:req.body.role
    })
    .then(result => {
        console.log(req.body)
        return jwt.sign(
            { user : req.body.username},
            'secret_key',
            {expiresIn : '30m'},
            (err, token) => res.json({authToken : token})
        )
    })
}

module.exports.verifyToken = (req, res) => {
    var token=req.params.token
    jwt.verify(token,'secret_key',(err,data)=> {
        err && console.log(err.name)
        console.log(data)
        if(!err)
            res.json({user : data.user})
        else 
            res.json({error : "session_expired"})
    })
}