import { Schema, Types, model, Document } from "mongoose";

export interface IJobPosting extends Document {
  title: string;
  description: string;
  requirements: string[];
  jobLocation: string;
  salary: string;
  startDate: Date;
  endDate: Date;
  hiringProcess: Types.ObjectId[];
  deletedAt: Date;
}

const JobPostingSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: [{ type: String, required: true }],
    jobLocation: { type: String, required: true },
    salary: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    hiringProcess: [{ type: Schema.Types.ObjectId, ref: "HiringProcess" }],
    deletedAt: { type: Date, required: false},
  },
  { timestamps: true }
);

export const JobPosting = model("JobPosting", JobPostingSchema);
