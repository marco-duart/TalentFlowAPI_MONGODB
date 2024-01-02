import { Schema, model } from "mongoose";

export interface IEmploymentHistory extends Document {
  companyName: string;
  position: string;
  startDate: Date;
  endDate: Date;
  achievements: string;
  active: boolean;
}

const EmploymentHistorySchema = new Schema(
  {
    companyName: { type: String, required: true },
    position: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    achievements: { type: String, required: true },
    active: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

export const EmploymentHistory = model(
  "EmploymentHistory",
  EmploymentHistorySchema
);
