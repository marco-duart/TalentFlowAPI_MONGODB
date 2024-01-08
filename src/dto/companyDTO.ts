import { Types } from "mongoose";

export class CreateCompanyDTO {
    companyName: string;
    sector: string;
    companySize: number;
    companyLocation: string;
    contactInformation: {
      phoneNumber: string[];
      email: string[];
      companyLinks: {
        title: string;
        link: string;
      }[];
    };
    jobPostings: Types.ObjectId;

  constructor(Data: CreateCompany) {
    this.companyName = Data.companyName;
    this.sector = Data.sector;
    this.companySize = Data.companySize
    this.companyLocation = Data.companyLocation
    this.contactInformation = Data.contactInformation
    this.jobPostings = new Types.ObjectId(Data.jobPostings);
  }
}

export class UpdateCompanyDTO {
  id: Types.ObjectId;
  companyName: string;
  sector: string;
  companySize: number;
  companyLocation: string;
  contactInformation: {
    phoneNumber: string[];
    email: string[];
    companyLinks: {
      title: string;
      link: string;
    }[];
  };
  jobPostings: Types.ObjectId;

  constructor(Data: UpdateCompany) {
    this.id = new Types.ObjectId(Data.id);
    this.companyName = Data.companyName;
    this.sector = Data.sector;
    this.companySize = Data.companySize
    this.companyLocation = Data.companyLocation
    this.contactInformation = Data.contactInformation
    this.jobPostings = new Types.ObjectId(Data.jobPostings);
  }
}

//TYPES

type CreateCompany = {
    companyName: string;
    sector: string;
    companySize: number;
    companyLocation: string;
    contactInformation: {
      phoneNumber: string[];
      email: string[];
      companyLinks: {
        title: string;
        link: string;
      }[];
    };
    jobPostings: string;
};

type UpdateCompany = {
  id: string;
  companyName: string;
  sector: string;
  companySize: number;
  companyLocation: string;
  contactInformation: {
    phoneNumber: string[];
    email: string[];
    companyLinks: {
      title: string;
      link: string;
    }[];
  };
  jobPostings: string;
};
