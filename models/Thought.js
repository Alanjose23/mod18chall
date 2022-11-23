const { Schema, model, Types } = require('mongoose');

// Schema to create a Thought model
const ThoughtSchema = new Schema(
  {
    thoughttext: {
      type: String,
      required: true,
      minlength:1,
      maxlength: 280,
    },
    username: {
      type: String,
      default: true,
    },
    startDate: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought= model('thought', ThoughtSchema);

module.exports = Thought;
