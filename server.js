var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
const path = require('path')
var multer = require('multer');

app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json())

var storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: function (req, file, cb) {
        cb(null , `IMAGE-${Date.now()}${path.extname(file.originalname)}`);
    }
}
);

var upload = multer({ storage } );
    

app.post('/profile', upload.single('profile'), (req, res) => {
    try {
        console.log("file",req.file)
      res.send(req.file);
    }catch(err) {
      res.send(400);
    }
});

var userController = require('./controller/user')
app.post("/signup", userController.signup)
app.post("/signin", userController.signin)
app.get("/verifytoken/:token", userController.verifyToken)

var mentorController = require('./controller/mentor')
app.post('/addmentor', mentorController.addMentor)
app.get('/getmentors', mentorController.getAllMentors)

var eventController = require('./controller/event')
app.post('/addevent', eventController.addEvent)
app.get('/getallevents', eventController.getAllEvents)
app.get('/geteventbyid/:id', eventController.getEventById)
app.get('/geteventsbycity/:id', eventController.getEventsByCity)

var bookingController = require('./controller/booking')
app.post('/addbooking', bookingController.addBooking)
app.post('/getbookingsbyuser', bookingController.getBookingsByUser)
app.delete('/removebooking',bookingController.removeBooking)

var cityController = require('./controller/city')
app.get('/getcities', cityController.getAllCities)

app.listen(4000, (err) => console.log("--->   Server running on port 4000   <---"))