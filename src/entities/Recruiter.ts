import { Schema, model, Document } from "mongoose";

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
  assignedCandidateList: Schema.Types.ObjectId[];
  candidateFeedback: Schema.Types.ObjectId[];
  interviews: Schema.Types.ObjectId[];
  hiringProcesses: Schema.Types.ObjectId[];
  deletedAt: Date;
}

export const RecruiterSchema = new Schema(
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
    deletedAt: { type: Date, required: false},
  },
  { timestamps: true }
);

export const Recruiter = model("Recruiter", RecruiterSchema);
