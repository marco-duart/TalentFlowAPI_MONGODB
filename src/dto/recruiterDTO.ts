import { Types } from "mongoose";

export class CreateRecruiterDTO {
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

  constructor(Data: CreateRecruiter) {
    this.name = Data.name;
    this.position = Data.position;
    this.contactInformation = Data.contactInformation;
    this.assignedCandidateList = Data.assignedCandidateList.map((id) => new Types.ObjectId(id))
		this.candidateFeedback = Data.candidateFeedback.map((id) => new Types.ObjectId(id))
    this.interviews = Data.interviews.map((id) => new Types.ObjectId(id))
    this.hiringProcesses = Data.hiringProcesses.map((id) => new Types.ObjectId(id))
  }
}

export class UpdateRecruiterDTO {
  id: Types.ObjectId;
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

  constructor(Data: UpdateRecruiter) {
    this.id = new Types.ObjectId(Data.id);
    this.name = Data.name;
    this.position = Data.position;
    this.contactInformation = Data.contactInformation;
    this.assignedCandidateList = Data.assignedCandidateList.map((id) => new Types.ObjectId(id))
		this.candidateFeedback = Data.candidateFeedback.map((id) => new Types.ObjectId(id))
    this.interviews = Data.interviews.map((id) => new Types.ObjectId(id))
    this.hiringProcesses = Data.hiringProcesses.map((id) => new Types.ObjectId(id))
  }
}

//TYPES

type CreateRecruiter = {
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
  assignedCandidateList: string[];
  candidateFeedback: string[];
  interviews: string[];
  hiringProcesses: string[];
};

type UpdateRecruiter = {
  id: string;
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
  assignedCandidateList: string[];
  candidateFeedback: string[];
  interviews: string[];
  hiringProcesses: string[];
};
