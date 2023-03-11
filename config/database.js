const mongoose = require("mongoose");
const MONGODB_URL = process.env.MONGODB_URL;

exports.connect = () => {

    mongoose.connect(MONGODB_URL,{
        useUnifiedTopology:true,
            useNewUrlParser: true,
    })
    .then(()=> console.log("Database Connected Successfully"))
    .catch((err) => {
        console.log(err.message);
        process.exit(1);
    })

}
