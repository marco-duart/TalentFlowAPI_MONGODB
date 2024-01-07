import { Schema, Types, model, Document } from "mongoose";

export interface IHiringProcess extends Document {
  startDate: Date;
  endDate: Date;
  stage: string; //(interviews, tests, etc.)
  recruiter: string;
  status: string; //(open, in progress, closed)
  interviews: Types.ObjectId[];
  applicationStatus: Types.ObjectId[];
  recruiters: Types.ObjectId[];
  active: boolean;
}

const HiringProcessSchema = new Schema(
  {
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: false },
    stage: { type: String, required: true }, // (interviews, tests, etc.)
    status: {
      type: String,
      enum: ["open", "in progress", "closed"],
      required: true,
    },
    interviews: [{ type: Schema.Types.ObjectId, ref: "Interview" }],
    applicationStatus: [
      { type: Schema.Types.ObjectId, ref: "ApplicationStatus" },
    ],
    recruiters: [{ type: Schema.Types.ObjectId, ref: "Recruiter" }],
    active: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

export const HiringProcess = model("HiringProcess", HiringProcessSchema);
