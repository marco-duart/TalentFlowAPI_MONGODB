import { Schema, model, Document } from "mongoose";

export interface IDashboard extends Document {
  overview: string;
  statistics: string;
  permissions: string;
  reporting: string;
  deletedAt: Date;
}

const DashboardSchema = new Schema(
  {
    overview: { type: String, required: true },
    statistics: { type: String, required: true },
    permissions: { type: String, required: true },
    reporting: { type: String, required: true },
    deletedAt: { type: Date, required: false},
  },
  { timestamps: true }
);

export const Dashboard = model("Dashboard", DashboardSchema);
