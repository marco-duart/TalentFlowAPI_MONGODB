import { Schema, Types, model, Document } from "mongoose";

export interface IInterview extends Document {
  dateTime: Date;
  interviewType: string; //(in-person, online)
  interviewer: {
    name: string;
    position: string;
  };
  questions: string[];
  answers: string[];
  interviewFeedback: string;
  candidate: Types.ObjectId;
  hiringProcess: Types.ObjectId;
  recruiter: Types.ObjectId;
  active: boolean;
}

const InterviewSchema = new Schema(
  {
    dateTime: { type: Date, required: true },
    interviewType: { type: String, required: true },
    interviewer: {
      name: { type: String, required: true },
      position: { type: String, required: true },
    },
    questions: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
    interviewFeedback: { type: String, required: true },
    candidate: { type: Schema.Types.ObjectId, ref: "Candidate" },
    hiringProcess: { type: Schema.Types.ObjectId, ref: "HiringProcess" },
    recruiter: { type: Schema.Types.ObjectId, ref: "Recruiter" },
    active: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

export const Interview = model("Interview", InterviewSchema);
