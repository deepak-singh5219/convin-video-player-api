const mongoose = require('mongoose');

const bucketSchema = new mongoose.Schema(
{
    buckets:{
        type:String,
        required:true
    }
}
)

module.exports = mongoose.model("bucketDocument",bucketSchema);