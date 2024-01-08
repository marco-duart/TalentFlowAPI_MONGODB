import { Types } from "mongoose";

export class CreateApplicationDocumentsDTO {
  resume: string;
  coverLetter: string;
  relevantDocuments: string[];
  candidate: Types.ObjectId;

  constructor(Data: CreateApplicationDocuments) {
    this.resume = Data.resume;
    this.coverLetter = Data.coverLetter;
    this.relevantDocuments = Data.relevantDocuments;
    this.candidate = new Types.ObjectId(Data.candidate);
  }
}

export class UpdateApplicationDocumentsDTO {
  id: Types.ObjectId;
  resume?: string;
  coverLetter?: string;
  relevantDocuments?: string[];
  candidate?: Types.ObjectId;

  constructor(Data: UpdateApplicationDocuments) {
    this.id = new Types.ObjectId(Data.id);
    this.resume = Data.resume;
    this.coverLetter = Data.coverLetter;
    this.relevantDocuments = Data.relevantDocuments;
    this.candidate = new Types.ObjectId(Data.candidate);
  }
}

//TYPES

type CreateApplicationDocuments = {
  resume: string;
  coverLetter: string;
  relevantDocuments: string[];
  candidate: string;
};

type UpdateApplicationDocuments = {
  id: string;
  resume: string;
  coverLetter: string;
  relevantDocuments: string[];
  candidate: string;
};