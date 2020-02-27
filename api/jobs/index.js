'use strict';


var express = require('express');
var controller = require('./jobs.controller');
var auth = require('../../auth/auth.service');

const UserSessionModel = require('./userSession.model');
const UserModel = require('../user/user.model');


var router = express.Router();

router.post("/",isAdmin(),controller.create())

router.post("/update",isAdmin(),controller.update())

function isAdmin()
{
  
}

module.exports= router;