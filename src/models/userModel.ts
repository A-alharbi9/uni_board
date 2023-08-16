import mongoose from 'mongoose';
import { prop, getModelForClass } from '@typegoose/typegoose';

class User {
  @prop({ required: true })
  public email!: string;

  @prop({ required: true })
  public password!: string;

  @prop({ type: () => [mongoose.Types.ObjectId] })
  public clipboard!: string[];
}

export const userModel =
  mongoose.models.User ||
  getModelForClass(User, { schemaOptions: { timestamps: true } });
