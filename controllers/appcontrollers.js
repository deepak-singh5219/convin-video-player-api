
const bucketModel = require('../Models/bucketModel');

exports.getBuckets = async (req,res) => {

    try {
        const _id = process.env.DOCUMENT_ID;
        const bucketDocument = await bucketModel.findOne({_id});
        res.status(200).json({
            "message":"success",
             bucketDocument
        })
        
    } catch (error) {
        res.status(400).json({
            "message":"failure",
            "error":error.message
        }) 
    }
}

exports.updateBuckets = async (req,res) => {
    try {
        const { buckets } = req.body;
        console.log(buckets);
        const _id = process.env.DOCUMENT_ID;
        const initialBucket = await bucketModel.findOne({_id});
        console.log(initialBucket);
        const updatedBuckets = await bucketModel.findByIdAndUpdate(_id,req.body);
        res.status(200).json({
            message:"success",
            updatedBuckets
        })
        
    } catch (err) {
        res.status(400).json({
            "message":"failure",
            "error":err.message
        })
        
    }
}
