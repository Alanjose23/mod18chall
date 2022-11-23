const { Schema, model, Types } = require('mongoose');


// Schema to create User model
const USchema = new Schema(
  {
   username: {
    type: String,
    unique: true,
    required: true,
    time: true,
   },
   email: {
    type: String,
    unique: true,
    required: true
   },
   thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'Thought'
   }],
  },
  {
    toJSON: {
      
      getters: true,
      virtuals: true
    },
  }
);

const User = model('user', USchema);

module.exports = User;
