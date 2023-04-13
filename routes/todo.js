const express = require('express');
const router = express.Router();
const todoCtrl = require('../controllers/todo');
const auth = require('../middleware/auth');







router.get('/', todoCtrl.getAllTodo);
router.post('/', todoCtrl.createTodo);
router.get('/:id', todoCtrl.getOneTodo);
router.put('/:id', todoCtrl.modifyTodo);
router.delete('/:id', todoCtrl.deleteTodo);





module.exports = router;