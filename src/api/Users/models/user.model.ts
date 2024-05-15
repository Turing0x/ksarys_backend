import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({

  enable: {
    type: Boolean,
    require: false,
    default: true
  },
  name: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  role: {
    type: String,
    default: 'client',
  },
  email: {
    type: String,
    require: true
  }

});

export const UserModel = mongoose.model('users', UserSchema)