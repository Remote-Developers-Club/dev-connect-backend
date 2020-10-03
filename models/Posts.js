/***
 * 
 * Acquah Samuel
 * CreatedAt: 17:18GMT
 */

/**
 * Posts Model
 */

const moongose = require('mongoose');
const Schema = moongose.Schema;


const PostSchema = Schema({
    postCategoryId: {
        type: String,
        require: true,
        minlength: 12
    },
    postTitle: {
        type: String,
        require: true
    },
    postAuthor: {
        type: String,
        require: true
    },
    postDate: {
        type: Date,
        require: true
    },
    postImage: {
        type: String,
        require: true
    }
});

/**
 * Export the Posts Model
 */
const Posts = moongose.model('post', PostSchema);
module.exports = Posts;