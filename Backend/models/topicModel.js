const mongoose = require('mongoose')

const Schema = mongoose.Schema

const topicSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    isCompleted:{
        type:String,
        required:true
    }
}, { timestamps: true})

topicSchema.statics.createTopic = async function(title, number, isCompleted){
    //Validation
    if (!title || !number || !isCompleted) {
        throw Error('All required fields must be filled')
    }
    
    const topic = await this.create({title,number,isCompleted})

    return topic
}



module.exports = mongoose.model('Topics', topicSchema)