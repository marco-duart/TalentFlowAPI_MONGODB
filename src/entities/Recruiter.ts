import { Schema, Types, model, Document } from "mongoose";

export interface IRecruiter extends Document {
  name: string;
  position: string;
  contactInformation: {
    phoneNumber: string[];
    email: string[];
    companyLinks: {
      title: string;
      link: string;
    }[];
  };
  assignedCandidateList: Types.ObjectId[];
  candidateFeedback: Types.ObjectId[];
  interviews: Types.ObjectId[];
  hiringProcesses: Types.ObjectId[];
  active: boolean;
}

const RecruiterSchema = new Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    contactInformation: {
      phoneNumber: [{ type: String, required: true }],
      email: [{ type: String, required: true }],
      companyLinks: [
        {
          title: { type: String, required: true },
          link: { type: String, required: true },
        },
      ],
    },
    assignedCandidateList: [{ type: Schema.Types.ObjectId, ref: "Candidate" }],
    candidateFeedback: [{ type: Schema.Types.ObjectId, ref: "Feedback" }],
    interviews: [{ type: Schema.Types.ObjectId, ref: "Interview" }],
    hiringProcesses: [{ type: Schema.Types.ObjectId, ref: "HiringProcess" }],
    active: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

export const Recruiter = model("Recruiter", RecruiterSchema);
