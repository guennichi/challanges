const express = require('express');
const router = express.Router();
const todoCtrl = require('../controllers/todo');
const auth = require('../middleware/auth');







router.get('/',auth, todoCtrl.getAllTodo);
router.post('/',auth, todoCtrl.createTodo);
router.get('/:id',auth, todoCtrl.getOneTodo);
router.put('/:id',auth, todoCtrl.modifyTodo);
router.delete('/:id',auth, todoCtrl.deleteTodo);





module.exports = router;