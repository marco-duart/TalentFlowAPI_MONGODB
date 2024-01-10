import { Schema } from "mongoose";

export class CreateApplicationStatusDTO {
  status: string;
  additionalComments?: string;
  candidate: Schema.Types.ObjectId;
  hiringProcess: Schema.Types.ObjectId;

  constructor(Data: CreateApplicationStatus) {
    this.status = Data.status;
    this.additionalComments = Data.additionalComments;
    this.candidate = new Schema.Types.ObjectId(Data.candidate);
    this.hiringProcess = new Schema.Types.ObjectId(Data.hiringProcess);
  }
}

export class UpdateApplicationStatusDTO {
  id: Schema.Types.ObjectId;
  status?: string;
  additionalComments?: string;
  candidate?: Schema.Types.ObjectId;
  hiringProcess?: Schema.Types.ObjectId;

  constructor(Data: UpdateApplicationStatus) {
    this.id = new Schema.Types.ObjectId(Data.id);
    this.status = Data.status;
    this.additionalComments = Data.additionalComments;
    this.candidate = new Schema.Types.ObjectId(Data.candidate);
    this.hiringProcess = new Schema.Types.ObjectId(Data.hiringProcess);
  }
}

//TYPES

type CreateApplicationStatus = {
  status: string;
  additionalComments?: string;
  candidate: string;
  hiringProcess: string;
};

type UpdateApplicationStatus = {
  id: string;
  status: string;
  additionalComments?: string;
  candidate: string;
  hiringProcess: string;
};
