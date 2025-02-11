const express = require('express');
const router = express.Router();
const seriesController = require('../controller/seriesController');

router.get('/series', seriesController.getAllSerie);
router.post('/series', seriesController.addSerie);
router.put('/series/:id', seriesController.updateSerie);
router.delete('/series/:id', seriesController.deleteSerie);
router.get('/series/:id', seriesController.getSerieById);

module.exports = router;
