const { Schema, model } = require('mongoose');


// Schema to create Student model
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
    ref: 'thought'
   }],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', USchema);

module.exports = User;
