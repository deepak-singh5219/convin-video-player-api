const express = require("express");
const router = express.Router();
const {getBuckets,updateBuckets} = require('../controllers/appcontrollers');

router.get('/buckets', getBuckets);
router.put('/updateBuckets', updateBuckets);


module.exports = router;