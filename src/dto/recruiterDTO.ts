import { Types } from "mongoose";

export class CreateNotificationsDTO {
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

  constructor(Data: CreateNotifications) {
    this.name = Data.name;
    this.position = Data.position;
    this.contactInformation = Data.contactInformation;
    this.assignedCandidateList = Data.assignedCandidateList.map((id) => new Types.ObjectId(id))
		this.candidateFeedback = Data.candidateFeedback.map((id) => new Types.ObjectId(id))
    this.interviews = Data.interviews.map((id) => new Types.ObjectId(id))
    this.hiringProcesses = Data.hiringProcesses.map((id) => new Types.ObjectId(id))
  }
}

export class UpdateNotificationsDTO {
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

  constructor(Data: UpdateNotifications) {
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

type CreateNotifications = {
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

type UpdateNotifications = {
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
