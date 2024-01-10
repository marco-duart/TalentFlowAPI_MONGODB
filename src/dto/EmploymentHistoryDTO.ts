import { Schema } from "mongoose";

export class CreateEmploymentHistoryDTO {
  companyName: string;
  position: string;
  startDate: Date;
  endDate: Date;
  achievements: string;

  constructor(Data: CreateEmploymentHistory) {
    this.companyName = Data.companyName;
    this.position = Data.position;
    this.startDate = Data.startDate;
    this.endDate = Data.endDate;
    this.achievements = Data.achievements;
  }
}

export class UpdateEmploymentHistoryDTO {
  id: Schema.Types.ObjectId;
  companyName: string;
  position: string;
  startDate: Date;
  endDate: Date;
  achievements: string;

  constructor(Data: UpdateEmploymentHistory) {
    this.id = new Schema.Types.ObjectId(Data.id);
    this.companyName = Data.companyName;
    this.position = Data.position;
    this.startDate = Data.startDate;
    this.endDate = Data.endDate;
    this.achievements = Data.achievements;
  }
}

//TYPES

type CreateEmploymentHistory = {
  companyName: string;
  position: string;
  startDate: Date;
  endDate: Date;
  achievements: string;
};

type UpdateEmploymentHistory = {
  id: string;
  companyName: string;
  position: string;
  startDate: Date;
  endDate: Date;
  achievements: string;
};
