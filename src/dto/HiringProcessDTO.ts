import { Schema } from "mongoose";

export class CreateHiringProcessDTO {
  startDate: Date;
  endDate: Date;
  stage: string;
  recruiter: string;
  status: string;
  interviews: Schema.Types.ObjectId[];
  applicationStatus: Schema.Types.ObjectId[];
  recruiters: Schema.Types.ObjectId[];

  constructor(Data: CreateHiringProcess) {
    this.startDate = Data.startDate;
    this.endDate = Data.endDate;
    this.stage = Data.stage;
    this.recruiter = Data.recruiter;
    this.status = Data.status;
    this.interviews = Data.interviews.map((id) => new Schema.Types.ObjectId(id));
    this.applicationStatus = Data.applicationStatus.map((id) => new Schema.Types.ObjectId(id));
    this.recruiters = Data.recruiters.map((id) => new Schema.Types.ObjectId(id));
  }
}

export class UpdateHiringProcessDTO {
  id: Schema.Types.ObjectId;
  startDate: Date;
  endDate: Date;
  stage: string;
  recruiter: string;
  status: string;
  interviews: Schema.Types.ObjectId[];
  applicationStatus: Schema.Types.ObjectId[];
  recruiters: Schema.Types.ObjectId[];

  constructor(Data: UpdateHiringProcess) {
    this.id = new Schema.Types.ObjectId(Data.id);
    this.startDate = Data.startDate;
    this.endDate = Data.endDate;
    this.stage = Data.stage;
    this.recruiter = Data.recruiter;
    this.status = Data.status;
    this.interviews = Data.interviews.map((id) => new Schema.Types.ObjectId(id));
    this.applicationStatus = Data.applicationStatus.map((id) => new Schema.Types.ObjectId(id));
    this.recruiters = Data.recruiters.map((id) => new Schema.Types.ObjectId(id));
  }
}

//TYPES

type CreateHiringProcess = {
  startDate: Date;
  endDate: Date;
  stage: string;
  recruiter: string;
  status: string;
  interviews: string[];
  applicationStatus: string[];
  recruiters: string[];
};

type UpdateHiringProcess = {
  id: string;
  startDate: Date;
  endDate: Date;
  stage: string;
  recruiter: string;
  status: string;
  interviews: string[];
  applicationStatus: string[];
  recruiters: string[];
};
