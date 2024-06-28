const mongoose = require("mongoose");

const likedMovieSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    genre: [String],
}, { _id: false });

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    likedMovies: Array,
});

module.exports = mongoose.model("users", userSchema);
