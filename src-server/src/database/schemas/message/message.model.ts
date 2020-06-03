import { Document, Schema } from 'mongoose';
import { getMessageForResponseFunction } from './message.methods';

export interface MessageModel extends Document {
  readonly user: Schema.Types.ObjectId;
  readonly roomSlug: string;
  readonly message: string;
  readonly usersInMessage: Schema.Types.ObjectId[];

  // dates
  createdAt?: Date;
  updatedAt?: Date;

  // methods
  getMessageForResponse: getMessageForResponseFunction;
  // getMessageForResponse: Promise<MessageForResponseDTO>;
  // getMessageForResponse(
  //   _id: Schema.Types.ObjectId,
  // ): getMessageForResponseFunction;
}
