import { Schema, models, model, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  image?: string;
  liveSiteUrl?: string;
  githubUrl?: string;
  category?: string;
  createdBy: Schema.Types.ObjectId;
}

const ProjectSchema = new Schema({
  title: { type: String, required: true, minlength: 3 },
  description: { type: String, required: true },
  image: { type: String },
  liveSiteUrl: { type: String },
  githubUrl: { type: String },
  category: { type: String },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Project = models.Project || model("Project", ProjectSchema);

export default Project;
