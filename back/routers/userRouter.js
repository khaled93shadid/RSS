const express = require('express')
const {getAllUsers,createUser,deleteuser,login,auth ,getuserbyemail,updateuser} =require('../controllers/usercontroller')

const router = express.Router();

router.get('/users',getAllUsers)
router.get('/getuserbyemail',getuserbyemail)
router.post('/createUser',createUser)
router.post('/login',login)
router.delete('/deleteuser',deleteuser)
router.get('/auth',auth)
router.put('/updateuser/:id',updateuser)

module.exports=router;