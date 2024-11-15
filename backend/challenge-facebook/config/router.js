const express = require('express')
const route = express.Router();
const feedController = require('../controller/feedController')

route.get('/feed', feedController.getAllFeed);
route.post('/save', feedController.saveFeed);
route.get('/feed/:feedId', feedController.viewFeed)
route.get('/delete/:feedId', feedController.deleteFeed)
route.get('/feed/edit/:feedId', feedController.renderEditPage)
route.post('/update/:feedId', feedController.updateFeed)
module.exports = route