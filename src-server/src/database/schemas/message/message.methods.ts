import { Schema } from 'mongoose';

import { MessageForResponseDTO } from 'modules/room/dto/message-for-response.dto';

/*
  Types
*/
export type getMessageForResponseFunction = (
  _id: Schema.Types.ObjectId,
) => MessageForResponseDTO;

/*
  Methods
*/
const getMessageForResponse: getMessageForResponseFunction = function(
  _id: Schema.Types.ObjectId,
) {
  return this.findOne({ _id }).populate('user');
};

/*
  Export
*/
export const messageStaticMethods = { getMessageForResponse };
