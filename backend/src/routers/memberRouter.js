const { Router } = require('express');
const memberController = require('../controllers/memberController');

const routerMember = Router();
routerMember.post('/', memberController.memberCreate)
routerMember.get('/', memberController.memberAll)
routerMember.get('/:id', memberController.memberFilterId)

module.exports = routerMember;