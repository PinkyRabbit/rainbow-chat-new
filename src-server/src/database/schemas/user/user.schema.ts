import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { isEmail } from 'validator';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: [isEmail, 'Invalid email'],
    },
    password: {
      type: String,
      required: true,
    },
    firstName: String,
    lastName: String,
    age: {
      type: Number,
      required: false,
      min: [12, 'Too little for this service'],
      max: [99, 'Too old for this service'],
    },
    country: String,
    city: String,
    phone: String,
    role: {
      type: String,
      required: true,
      enum: [
        'super_admin',
        'admin',
        'moderator',
        'diamond_user',
        'user',
        'not_verified_user',
      ],
      default: 'user',
    },
  },
  { timestamps: true },
);

UserSchema.pre('save', function(next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user: any = this;
  if (!this.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) {
        return next(error);
      }
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

export default UserSchema;
