import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
  name: { type: String, required: [true, "Name is Required"] },
  image: { type: String, required: [true, "Image is Required"] },
  email: { type: String, required: [true, "Email is Required"] },
  password: { type: String, required: [true, "Password is Required"] },
  role: { type: String, default: "USER", ENUM: ["USER", "ADMIN"] },
});

export const User = model<TUser>("User", userSchema);
