import { Schema, Types, model, Document } from "mongoose";

export interface ICompany extends Document {
  companyName: string;
  sector: string;
  companySize: number;
  companyLocation: string;
  contactInformation: {
    phoneNumber: string[];
    email: string[];
    companyLinks: {
      title: string;
      link: string;
    }[];
  };
  jobPostings: Types.ObjectId;
  deletedAt: Date;
}

export const CompanySchema = new Schema(
  {
    companyName: { type: String, required: true },
    sector: { type: String, required: true },
    companySize: { type: Number, required: true },
    companyLocation: { type: String, required: true },
    contactInformation: [
      {
        title: { type: String, required: false },
        link: { type: String, required: false },
      },
    ],
    jobPostings: [{ type: Schema.Types.ObjectId, ref: "JobPosting" }],
    deletedAt: { type: Date, required: false},
  },
  { timestamps: true }
);

export const Company = model("Company", CompanySchema);
