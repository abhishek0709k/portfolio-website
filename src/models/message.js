const { Schema , model } = require("mongoose")

const messageSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    },
    salt : {
        type : String,
        required : true
    }
})

const messageModel = model("message" , messageSchema)

module.exports = messageModel;