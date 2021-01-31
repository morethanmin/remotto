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
    like: {
        type: Number,
        default: 0
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

module.exports = mongoose.model('Article', ArticleSchema);