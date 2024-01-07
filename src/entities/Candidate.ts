import { Schema, Types, model, Document } from "mongoose";

export interface ICandidate extends Document {
  name: string;
  email: string;
  phoneNumber: string;
  resume: string; //(file or text)
  portfolio: string;
  academicHistory: {
    title: string;
    institution: string;
    degree: string;
    startDate: Date;
    endDate: Date;
  }[];
  skills: string[];
  professionalLinks: {
    title: string;
    link: string;
  }[];
  employmentHistory: Types.ObjectId;
  applicationStatus: Types.ObjectId[];
  interviews: Types.ObjectId[];
  feedback: Types.ObjectId[];
  applicationDocuments: Types.ObjectId[];
  active: boolean;
}

const CandidateSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    resume: { type: String, required: true },
    portfolio: { type: String, required: false },
    academicHistory: [
      {
        title: { type: String, required: false },
        institution: { type: String, required: false },
        degree: { type: String, required: false },
        startDate: { type: Date, required: false },
        endDate: { type: Date, required: false },
      },
    ],
    skills: { type: [String], required: false },
    professionalLinks: [
      {
        title: { type: String, required: false },
        link: { type: String, required: false },
      },
    ],
    employmentHistory: {
      type: Schema.Types.ObjectId,
      ref: "EmploymentHistory",
    },
    applicationStatus: [
      { type: Schema.Types.ObjectId, ref: "ApplicationStatus" },
    ],
    interviews: [{ type: Schema.Types.ObjectId, ref: "Interview" }],
    feedback: [{ type: Schema.Types.ObjectId, ref: "Feedback" }],
    applicationDocuments: [
      { type: Schema.Types.ObjectId, ref: "ApplicationDocument" },
    ],
    active: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

export const Candidate = model("Candidate", CandidateSchema);
