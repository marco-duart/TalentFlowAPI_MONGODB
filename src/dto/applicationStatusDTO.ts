import { Types } from "mongoose";

export class CreateApplicationStatusDTO {
  status: string;
  additionalComments?: string;
  candidate: Types.ObjectId;
  hiringProcess: Types.ObjectId;

  constructor(Data: CreateApplicationStatus) {
    this.status = Data.status;
    this.additionalComments = Data.additionalComments;
    this.candidate = new Types.ObjectId(Data.candidate);
    this.hiringProcess = new Types.ObjectId(Data.hiringProcess);
  }
}

export class UpdateApplicationStatusDTO {
  id: Types.ObjectId;
  status?: string;
  additionalComments?: string;
  candidate?: Types.ObjectId;
  hiringProcess?: Types.ObjectId;

  constructor(Data: UpdateApplicationStatus) {
    this.id = new Types.ObjectId(Data.id);
    this.status = Data.status;
    this.additionalComments = Data.additionalComments;
    this.candidate = new Types.ObjectId(Data.candidate);
    this.hiringProcess = new Types.ObjectId(Data.hiringProcess);
  }
}

//TYPES

type CreateApplicationStatus = {
  status: string;
  additionalComments: string;
  candidate: string;
  hiringProcess: string;
};

type UpdateApplicationStatus = {
  id: string;
  status: string;
  additionalComments: string;
  candidate: string;
  hiringProcess: string;
};
