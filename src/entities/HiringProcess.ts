import { Schema, model, Document } from "mongoose";

export interface IHiringProcess extends Document {
  startDate: Date;
  endDate: Date;
  stage: string; //(interviews, tests, etc.)
  recruiter: string;
  status: string; //(open, in progress, closed)
  interviews: Schema.Types.ObjectId[];
  applicationStatus: Schema.Types.ObjectId[];
  recruiters: Schema.Types.ObjectId[];
  deletedAt: Date;
}

export const HiringProcessSchema = new Schema(
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
    deletedAt: { type: Date, required: false},
  },
  { timestamps: true }
);

export const HiringProcess = model("HiringProcess", HiringProcessSchema);
