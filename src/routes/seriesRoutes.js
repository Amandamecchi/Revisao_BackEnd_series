const express = require('express');
const router = express.Router();
const seriesController = require('../controller/seriesController');

router.get('/series', series, seriesController.getAllSerie);
router.post('/series', series, seriesController.addSerie);
router.put('/series/:id', series, seriesController.updateSerie);
router.delete('/series/:id',series, seriesController.deleteSerie);
router.get('/series/:id', series, seriesController.getSerieById);

module.exports = router;
