const express = reqire('express')
const {getAllUsers} =require('../controllers/usercontroller')

const router = express.Router();

router.get('/users',getAllUsers)

module.exports=router;