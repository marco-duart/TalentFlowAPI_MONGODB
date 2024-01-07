import { Schema, Types, model, Document } from "mongoose";

export interface IApplicationDocuments extends Document {
  resume: string; 
  coverLetter: string; 
  relevantDocuments: string[];
  candidate: Types.ObjectId;
  active: boolean;
}

const ApplicationDocumentsSchema = new Schema(
  {
    resume: { type: String, required: true },
    coverLetter: { type: String, required: false },
    relevantDocuments: [{ type: String, required: false }],
    candidate: { type: Schema.Types.ObjectId, ref: "Candidate" },
    active: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

export const ApplicationDocuments = model(
  'ApplicationDocuments',
  ApplicationDocumentsSchema
);
