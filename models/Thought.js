const { Schema, model } = require('mongoose');

const reactionSchema = require('./Reaction');
const dayjs = require('dayjs');
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
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
        reactions: [reactionSchema],
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
      });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;


