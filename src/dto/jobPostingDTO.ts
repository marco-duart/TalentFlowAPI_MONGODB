import { Types } from "mongoose";

export class CreateJobPostingDTO {
  title: string;
  description: string;
  requirements: string[];
  jobLocation: string;
  salary: string;
  startDate: Date;
  endDate: Date;
  hiringProcess: Types.ObjectId[];

  constructor(Data: CreateJobPosting) {
    this.title = Data.title;
    this.description = Data.description;
    this.requirements = Data.requirements;
    this.jobLocation = Data.jobLocation;
    this.salary = Data.salary;
    this.startDate = Data.startDate;
    this.endDate = Data.endDate;
    this.hiringProcess = Data.hiringProcess.map((id) => new Types.ObjectId(id))
  }
}

export class UpdateJobPostingDTO {
  id: Types.ObjectId;
  title: string;
  description: string;
  requirements: string[];
  jobLocation: string;
  salary: string;
  startDate: Date;
  endDate: Date;
  hiringProcess: Types.ObjectId[];

  constructor(Data: UpdateJobPosting) {
    this.id = new Types.ObjectId(Data.id);
    this.title = Data.title;
    this.description = Data.description;
    this.requirements = Data.requirements;
    this.jobLocation = Data.jobLocation;
    this.salary = Data.salary;
    this.startDate = Data.startDate;
    this.endDate = Data.endDate;
    this.hiringProcess = Data.hiringProcess.map((id) => new Types.ObjectId(id))
  }
}

//TYPES

type CreateJobPosting = {
  title: string;
  description: string;
  requirements: string[];
  jobLocation: string;
  salary: string;
  startDate: Date;
  endDate: Date;
  hiringProcess: string[];
};

type UpdateJobPosting = {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  jobLocation: string;
  salary: string;
  startDate: Date;
  endDate: Date;
  hiringProcess: string[];
};
