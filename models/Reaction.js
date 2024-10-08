const { Schema, Types } = require('mongoose');

const dayjs = require('dayjs');
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 25,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: () => dayjs().format('DD/MM/YYYY'),
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
