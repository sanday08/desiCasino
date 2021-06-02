const mongoose = require("mongoose");

const SubperSchema = new mongoose.Schema({
    percent: {
        type: Number,
        default: 0
    }

}, { timestamps: true })
module.exports = mongoose.model("Subper", SubperSchema);