import { Schema } from 'mongoose';

import { messageStaticMethods } from './message.methods';

const MessageSchema = new Schema(
  {
    roomSlug: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    usersInMessage: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
      },
    ],
  },
  { timestamps: true },
);

MessageSchema.statics = messageStaticMethods;

export default MessageSchema;
