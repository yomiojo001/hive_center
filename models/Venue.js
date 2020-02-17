const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const VenueSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = Venue = mongoose.model('venue', VenueSchema);