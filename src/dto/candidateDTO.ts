import { Schema } from "mongoose";

export class CreateCandidateDTO {
  name: string;
  email: string;
  phoneNumber: string;
  resume: string;
  portfolio?: string;
  academicHistory: {
    title: string;
    institution: string;
    degree: string;
    startDate: Date;
    endDate: Date;
  }[];
  skills?: string[];
  professionalLinks?: {
    title: string;
    link: string;
  }[];
  employmentHistory?: Schema.Types.ObjectId;
  applicationStatus?: Schema.Types.ObjectId[];
  interviews?: Schema.Types.ObjectId[];
  feedback?: Schema.Types.ObjectId[];
  applicationDocuments?: Schema.Types.ObjectId[];

  constructor(Data: CreateCandidate) {
    this.name = Data.name;
    this.email = Data.email;
    this.phoneNumber = Data.phoneNumber;
    this.resume = Data.resume;
    this.portfolio = Data.portfolio;
    this.academicHistory = Data.academicHistory;
    this.skills = Data.skills;
    this.professionalLinks = Data.professionalLinks;
    this.employmentHistory = new Schema.Types.ObjectId(Data.employmentHistory);
    this.applicationStatus = Data.applicationStatus.map(
      (id) => new Schema.Types.ObjectId(id)
    );
    this.interviews = Data.interviews.map((id) => new Schema.Types.ObjectId(id));
    this.feedback = Data.feedback.map((id) => new Schema.Types.ObjectId(id));
    this.applicationDocuments = Data.applicationDocuments.map(
      (id) => new Schema.Types.ObjectId(id)
    );
  }
}

export class UpdateCandidateDTO {
  id: Schema.Types.ObjectId;
  name: string;
  email: string;
  phoneNumber: string;
  resume: string;
  portfolio?: string;
  academicHistory: {
    title: string;
    institution: string;
    degree: string;
    startDate: Date;
    endDate: Date;
  }[];
  skills?: string[];
  professionalLinks?: {
    title: string;
    link: string;
  }[];
  employmentHistory?: Schema.Types.ObjectId;
  applicationStatus?: Schema.Types.ObjectId[];
  interviews?: Schema.Types.ObjectId[];
  feedback?: Schema.Types.ObjectId[];
  applicationDocuments?: Schema.Types.ObjectId[];

  constructor(Data: UpdateCandidate) {
    this.id = new Schema.Types.ObjectId(Data.id);
    this.name = Data.name;
    this.email = Data.email;
    this.phoneNumber = Data.phoneNumber;
    this.resume = Data.resume;
    this.portfolio = Data.portfolio;
    this.academicHistory = Data.academicHistory;
    this.skills = Data.skills;
    this.professionalLinks = Data.professionalLinks;
    this.employmentHistory = new Schema.Types.ObjectId(Data.employmentHistory);
    this.applicationStatus = Data.applicationStatus.map(
      (id) => new Schema.Types.ObjectId(id)
    );
    this.interviews = Data.interviews.map((id) => new Schema.Types.ObjectId(id));
    this.feedback = Data.feedback.map((id) => new Schema.Types.ObjectId(id));
    this.applicationDocuments = Data.applicationDocuments.map(
      (id) => new Schema.Types.ObjectId(id)
    );
  }
}

//TYPES

type CreateCandidate = {
  name: string;
  email: string;
  phoneNumber: string;
  resume: string;
  portfolio: string;
  academicHistory: {
    title: string;
    institution: string;
    degree: string;
    startDate: Date;
    endDate: Date;
  }[];
  skills: string[];
  professionalLinks: {
    title: string;
    link: string;
  }[];
  employmentHistory: string;
  applicationStatus: string[];
  interviews: string[];
  feedback: string[];
  applicationDocuments: string[];
};

type UpdateCandidate = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  resume: string;
  portfolio: string;
  academicHistory: {
    title: string;
    institution: string;
    degree: string;
    startDate: Date;
    endDate: Date;
  }[];
  skills: string[];
  professionalLinks: {
    title: string;
    link: string;
  }[];
  employmentHistory: string;
  applicationStatus: string[];
  interviews: string[];
  feedback: string[];
  applicationDocuments: string[];
};
