const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
        description:{
            type: String,
            required:true,
            trim:true,
            validate(value){
                if(value.length < 5)
                throw new Error('Description length is too short!')
            }
        },
        completed:{
            type: Boolean,
            default: false,
        }
})

const Tasks = mongoose.model('Tasks',taskSchema)

module.exports = Tasks;