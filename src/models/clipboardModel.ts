import mongoose from 'mongoose';
import { prop, getModelForClass } from '@typegoose/typegoose';

class Clipboard {
  @prop({ required: true })
  public userId!: mongoose.Types.ObjectId;

  @prop({ type: () => [String] })
  public userBoard!: string[];
}

export const clipboardModel = getModelForClass(Clipboard, {
  schemaOptions: { timestamps: true },
});
