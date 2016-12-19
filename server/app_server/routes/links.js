var express = require('express');
var router = express.Router();
var linksController = require('../controllers/LinksController');
router.get('/', linksController.index);
module.exports = router;
