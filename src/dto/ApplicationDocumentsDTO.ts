import { Schema } from "mongoose";

export class CreateApplicationDocumentsDTO {
  resume?: string;
  coverLetter: string;
  relevantDocuments: string[];
  candidate: Schema.Types.ObjectId;

  constructor(Data: CreateApplicationDocuments) {
    this.resume = Data.resume;
    this.coverLetter = Data.coverLetter;
    this.relevantDocuments = Data.relevantDocuments;
    this.candidate = new Schema.Types.ObjectId(Data.candidate);
  }
}

export class UpdateApplicationDocumentsDTO {
  id: Schema.Types.ObjectId;
  resume?: string;
  coverLetter?: string;
  relevantDocuments?: string[];
  candidate?: Schema.Types.ObjectId;

  constructor(Data: UpdateApplicationDocuments) {
    this.id = new Schema.Types.ObjectId(Data.id);
    this.resume = Data.resume;
    this.coverLetter = Data.coverLetter;
    this.relevantDocuments = Data.relevantDocuments;
    this.candidate = new Schema.Types.ObjectId(Data.candidate);
  }
}

//TYPES

type CreateApplicationDocuments = {
  resume?: string;
  coverLetter: string;
  relevantDocuments: string[];
  candidate: string;
};

type UpdateApplicationDocuments = {
  id: string;
  resume?: string;
  coverLetter: string;
  relevantDocuments: string[];
  candidate: string;
};
