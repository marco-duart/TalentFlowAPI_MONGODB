import { Schema, model, Document } from "mongoose";

export interface IApplicationDocuments extends Document {
  resume: string; 
  coverLetter: string; 
  relevantDocuments: string[];
  candidate: string
  deletedAt: Date;
}

export const ApplicationDocumentsSchema = new Schema(
  {
    resume: { type: String, required: true },
    coverLetter: { type: String },
    relevantDocuments: [{ type: String }],
    candidate: { type: Schema.Types.ObjectId, ref: "Candidate" },
    deletedAt: { type: Date},
  },
  { timestamps: true }
);

export const ApplicationDocuments = model(
  'ApplicationDocuments',
  ApplicationDocumentsSchema
);
