import { Schema, Types, model, Document } from "mongoose";

export interface IFeedback extends Document {
  feedbackDate: Date;
  overallAssessment: string;
  specificComments: string;
  recommendation: string;
  active: boolean;
}

const FeedbackSchema = new Schema(
  {
    feedbackDate: { type: Date, required: true },
    overallAssessment: { type: String, required: true },
    specificComments: { type: String, required: true },
    recommendation: { type: String, required: true },
    active: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

export const Feedback = model("Feedback", FeedbackSchema);
