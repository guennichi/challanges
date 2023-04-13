const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/User');

const passport= require('../passport-strategies/bearer');







router.get('/', passport.authenticate('bearer', { session: false }),
function(req, res) {res.json(req.user)}, userCtrl.getAllUser);

router.post('/',passport.authenticate('bearer', { session: false }),
function(req, res) {res.json(req.user)}, userCtrl.createUser);

router.get('/:id',passport.authenticate('bearer', { session: false }),
function(req, res) {res.json(req.user)}, userCtrl.getOneUser);

router.put('/:id',passport.authenticate('bearer', { session: false }),
function(req, res) {res.json(req.user)}, userCtrl.modifyUser);

router.delete('/:id',passport.authenticate('bearer', { session: false }),
function(req, res) {res.json(req.user)}, userCtrl.deleteUser);