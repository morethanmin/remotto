const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    comment : {
        type: String,
        deafult: "hello"
    },
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
    myArticles:{
        type: Schema.Types.ObjectId,
        ref: 'Article'
    },
    myLikes: {
        type: Schema.Types.ObjectId,
        ref: 'Article'
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);