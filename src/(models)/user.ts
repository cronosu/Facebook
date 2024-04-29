import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import mongoose from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  nickname: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
}); 


  userSchema.plugin(uniqueValidator);

 

export interface User extends mongoose.Document {
    email: string;
    password: string;
    nickname: string;
    image: string;
  }
  
export default mongoose.models.user || model<User>("user", userSchema,"user");