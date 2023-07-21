const topic = require('../models/topicModel')

//Get all topics
const getTopics = async (req, res) => {
    const topics = await topic.find({}).sort({createdAt: -1})

    res.status(200).json(topics)
}

//Get specific Topic
const getTopic = async (req, res) =>{
    const {title} = req.body
    //Finding Topic by title
    const topics = await topic.find({title: title})
    
    if(!topics) {
        return res.status(404).json({status: 'No such user'})
    }

    res.status(200).json(topics)
}

//Create Topic
const createTopic = async (req,res) =>{
    const {title, number, isCompleted} = req.body

    try{
        const user1 = await topic.createTopic(title, number, isCompleted)
        
        res.status(200).json({stsus: 'Topic created'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//Delete Topic
const deleteTopic = async (req,res) => {
    const {title} = req.body
    //Finding topic by title
    const topics = await topic.findOneAndDelete({title: title})

    if(!topics) {
        return res.status(404).json({status: 'No such topic'})
    }

    res.status(200).json({status: 'Topic Deleted Successfully'})
}
//Update Topic
const updateTopic = async (req,res) => {
    const {title, number, isCompleted} = req.body

    //Finding topic by title
    const topics = await topic.findOneAndUpdate({title: title}, {
        ...req.body
    })

    if(!topics) {
        return res.status(404).json({status: 'No such topic'})
    }

    res.status(200).json({status: 'User Updated Successfully'})

}


module.exports = {
    createTopic,
    getTopic,
    getTopics,
    deleteTopic,
    updateTopic
}