import { Schema, model } from "mongoose";

export interface IApplicationStatus extends Document {
  status: string; //(pending, under review, approved, rejected)
  additionalComments: string;
  candidate: Schema.Types.ObjectId;
  hiringProcess: Schema.Types.ObjectId;
  active: boolean;
}

const ApplicationStatusSchema = new Schema(
  {
    status: { type: String, required: true },
    additionalComments: { type: String, required: false },
    candidate: { type: Schema.Types.ObjectId, ref: "Candidate" },
    hiringProcess: { type: Schema.Types.ObjectId, ref: "HiringProcess" },
    active: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

export const ApplicationStatus = model(
  "ApplicationStatus",
  ApplicationStatusSchema
);
