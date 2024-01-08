import { Types } from "mongoose";

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
  employmentHistory?: Types.ObjectId;
  applicationStatus?: Types.ObjectId[];
  interviews?: Types.ObjectId[];
  feedback?: Types.ObjectId[];
  applicationDocuments?: Types.ObjectId[];

  constructor(Data: CreateCandidate) {
    this.name = Data.name;
    this.email = Data.email;
    this.phoneNumber = Data.phoneNumber;
    this.resume = Data.resume;
    this.portfolio = Data.portfolio;
    this.academicHistory = Data.academicHistory;
    this.skills = Data.skills;
    this.professionalLinks = Data.professionalLinks;
    this.employmentHistory = new Types.ObjectId();
    this.applicationStatus = Data.applicationStatus.map(
      (id) => new Types.ObjectId(id)
    );
    this.interviews = Data.interviews.map((id) => new Types.ObjectId(id));
    this.feedback = Data.feedback.map((id) => new Types.ObjectId(id));
    this.applicationDocuments = Data.applicationDocuments.map(
      (id) => new Types.ObjectId(id)
    );
  }
}

export class UpdateCandidateDTO {
  id: Types.ObjectId;
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
  employmentHistory?: Types.ObjectId;
  applicationStatus?: Types.ObjectId[];
  interviews?: Types.ObjectId[];
  feedback?: Types.ObjectId[];
  applicationDocuments?: Types.ObjectId[];

  constructor(Data: UpdateCandidate) {
    this.id = new Types.ObjectId(Data.id);
    this.name = Data.name;
    this.email = Data.email;
    this.phoneNumber = Data.phoneNumber;
    this.resume = Data.resume;
    this.portfolio = Data.portfolio;
    this.academicHistory = Data.academicHistory;
    this.skills = Data.skills;
    this.professionalLinks = Data.professionalLinks;
    this.employmentHistory = new Types.ObjectId();
    this.applicationStatus = Data.applicationStatus.map(
      (id) => new Types.ObjectId(id)
    );
    this.interviews = Data.interviews.map((id) => new Types.ObjectId(id));
    this.feedback = Data.feedback.map((id) => new Types.ObjectId(id));
    this.applicationDocuments = Data.applicationDocuments.map(
      (id) => new Types.ObjectId(id)
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
