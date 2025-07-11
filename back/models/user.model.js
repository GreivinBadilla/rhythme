import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: false,
    unique: false,
    min: 4,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: function () {
      return this.authProvider === 'local';
    },
  },
  profilePicture: {
    type: String,
    default: "",
  },
  coverPicture: {
    type: String,
    default: "",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  followers: {
    type: [String],
    default: [],
  },
  following: {
    type: [String],
    default: [],
  },
  desc: {
    type: String,
    max: 250,
  },
  from: {
    type: String,
    default: "",
  },
  relationship: {
    type: Number,
    enum: [1, 2, 3],
    default: 1,
  },

  authProvider: {
    type: String,
    enum: ['local', 'google'],
    default: 'local',
  },
});

export default mongoose.model("User", userSchema);
