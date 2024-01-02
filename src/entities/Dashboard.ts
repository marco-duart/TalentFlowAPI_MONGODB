import { Schema, model } from "mongoose";

export interface IDashboard extends Document {
  overview: string;
  statistics: string;
  permissions: string;
  reporting: string;
  active: boolean;
}

const DashboardSchema = new Schema(
  {
    overview: { type: String, required: true },
    statistics: { type: String, required: true },
    permissions: { type: String, required: true },
    reporting: { type: String, required: true },
    active: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

export const Dashboard = model("Dashboard", DashboardSchema);
