const mongoose = require("mongoose")
console.log(process.env.dbUrl)
mongoose.connect(process.env.dbUrl)     