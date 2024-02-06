import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  avatarUrl?: string;
  description?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  projects?: Schema.Types.ObjectId[];
}

const UserSchema = new Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 100 },
  email: { type: String, required: true, unique: true },
  avatarUrl: { type: String },
  description: { type: String, minlength: 2, maxlength: 1000 },
  githubUrl: { type: String },
  linkedinUrl: { type: String },
  projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
});

const User = models.User || model("User", UserSchema);

export default User;
