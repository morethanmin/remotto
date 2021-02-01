const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    image: {
        url: {
            type: String,
            default: '/images/default-user.jpg'
        },
        filename : {
            type: String,
            default: 'default'
        }
    },
    description:{
        type: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'  
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

module.exports = mongoose.model('Article', ArticleSchema);