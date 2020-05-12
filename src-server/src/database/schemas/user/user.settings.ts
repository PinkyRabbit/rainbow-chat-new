export default {
  nameColor: {
    type: String,
    required: true,
    trim: true,
    default: '255,237,196',
  },
  nameFont: {
    type: String,
    required: true,
    trim: true,
    default: 'font-1',
  },
  textColor: {
    type: String,
    required: true,
    trim: true,
    default: '255,237,196',
  },
  textFont: {
    type: String,
    required: true,
    trim: true,
    default: 'font-1',
  },
  soundNotification: {
    type: String,
    required: true,
    trim: true,
    default: 'sound-1',
  },
  soundVolume: {
    type: Number,
    required: true,
    default: 100,
  },
  messageBorderType: {
    type: String,
    required: false,
    lowercase: true,
    trim: true,
    enum: [null, 'dashed', 'dotted', 'solid', 'convex'],
    default: null,
  },
};
