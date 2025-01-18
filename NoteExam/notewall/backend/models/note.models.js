const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [3, "Title must have at least 3 characters"]
  },
  body: {
    type: String,
    required: [true, "Body is required"],
    maxlength: [250, "Body cannot exceed 250 characters"]
  },
  tags: {
    type: [String], // Array of strings
    validate: {
      validator: function (tags) {
        return tags.length <= 5; // Limit to 5 tags
      },
      message: "Cannot have more than 5 tags",
    },
  },
}, { timestamps: true });

module.exports = mongoose.model("Note", NoteSchema);
