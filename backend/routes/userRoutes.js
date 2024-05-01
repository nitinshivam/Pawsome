const express = require('express');
const { registerUser, loginUser, currentUser, bookAppointment, getAppointments } = require('../controllers/userController');

const router = express.Router();


router.post('/register',registerUser)
router.post('/login',loginUser);
router.get('/current',currentUser);
router.post('/bookAppointment',bookAppointment);
router.post('/getAppointments',getAppointments);

module.exports = router;