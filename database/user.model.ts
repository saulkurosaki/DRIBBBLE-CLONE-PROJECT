import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  email: string;
  avatarUrl?: string;
  description?: string;
  githubUrl?: string;
  linkedInUrl?: string;
  projects?: Schema.Types.ObjectId[];
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  name: { type: String, required: true, minlength: 2, maxlength: 100 },
  email: { type: String, required: true, unique: true },
  avatarUrl: { type: String },
  description: { type: String, minlength: 2, maxlength: 1000 },
  githubUrl: { type: String },
  linkedInUrl: { type: String },
  projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
});

const User = models.User || model("User", UserSchema);

export default User;
