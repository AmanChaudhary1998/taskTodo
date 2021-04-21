const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task:{
        type:String,
        required:true
    },
    subTask:{
        type:String
    },
    status:{
        type:Boolean
    }
},
{
    timestamps:{
        default:true
    }
});

module.exports = mongoose.model('Task',taskSchema);