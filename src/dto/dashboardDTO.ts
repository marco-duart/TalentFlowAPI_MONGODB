import { Types } from "mongoose";

export class CreateDashboardDTO {
  overview: string;
  statistics: string;
  permissions: string;
  reporting: string;

  constructor(Data: CreateDashboard) {
    this.overview = Data.overview;
    this.statistics = Data.statistics;
    this.permissions = Data.permissions;
    this.reporting = Data.reporting;
  }
}

export class UpdateDashboardDTO {
  id: Types.ObjectId;
  overview: string;
  statistics: string;
  permissions: string;
  reporting: string;

  constructor(Data: UpdateDashboard) {
    this.id = new Types.ObjectId(Data.id);
    this.overview = Data.overview;
    this.statistics = Data.statistics;
    this.permissions = Data.permissions;
    this.reporting = Data.reporting;
  }
}

//TYPES

type CreateDashboard = {
  overview: string;
  statistics: string;
  permissions: string;
  reporting: string;
};

type UpdateDashboard = {
  id: string;
  overview: string;
  statistics: string;
  permissions: string;
  reporting: string;
};
