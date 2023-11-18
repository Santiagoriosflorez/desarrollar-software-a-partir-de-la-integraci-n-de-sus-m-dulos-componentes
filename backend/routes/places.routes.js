const express = require('express');
const router = express.Router();
const  { getplaces, postplaces } = require ("../controllers/places.controller")


router.get('/places',getplaces);
router.post('/places',postplaces);

module.exports = router;