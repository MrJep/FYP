const express = require('express')
const router = express.Router()
const {
    createTopic,
    getTopic,
    getTopics,
    deleteTopic,
    updateTopic
} = require('../controllers/topicDAO')

//create topic
router.post('/create', createTopic)
//delete a topic
router.delete('/delete', deleteTopic)
//update
router.patch('/patch', updateTopic)
//view one topic
router.get('/gettopic', getTopic)
//view all topics
router.get('/gettopics', getTopics)


module.exports = router