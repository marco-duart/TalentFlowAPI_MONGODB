import { Schema, Types, model, Document } from "mongoose";

export interface IApplicationStatus extends Document {
  status: string; //(pending, under review, approved, rejected)
  additionalComments: string;
  candidate: Types.ObjectId;
  hiringProcess: Types.ObjectId;
  deletedAt: Date;
}

export const ApplicationStatusSchema = new Schema(
  {
    status: { type: String, required: true },
    additionalComments: { type: String, required: false },
    candidate: { type: Schema.Types.ObjectId, ref: "Candidate" },
    hiringProcess: { type: Schema.Types.ObjectId, ref: "HiringProcess" },
    deletedAt: { type: Date, required: false},
  },
  { timestamps: true }
);

export const ApplicationStatus = model(
  "ApplicationStatus",
  ApplicationStatusSchema
);
