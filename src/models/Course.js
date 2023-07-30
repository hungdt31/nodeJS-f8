const mongoose = require("mongoose");
const { Schema } = mongoose;

const Course = new Schema({
    name: { type: String, default: "no name", maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Course", Course);
