const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    feedback: {
        type: String,
        required: true,
        maxlength: 250
    },
    createdAt: {
        type: Date,
        default: Date.now
    }, user: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;