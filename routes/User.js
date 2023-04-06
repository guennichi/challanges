const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/User');
const auth = require('../middleware/auth');







router.get('/',auth, userCtrl.getAllUser);
router.post('/',auth, userCtrl.createUser);
router.get('/:id',auth, userCtrl.getOneUser);
router.put('/:id',auth, userCtrl.modifyUser);
router.delete('/:id',auth, userCtrl.deleteUser);