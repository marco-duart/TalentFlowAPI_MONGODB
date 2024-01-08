import { Types } from "mongoose";

export class CreateInterviewDTO {
  dateTime: Date;
  interviewType: string;
  interviewer: {
    name: string;
    position: string;
  };
  questions: string[];
  answers: string[];
  interviewFeedback: string;
  candidate: Types.ObjectId;
  hiringProcess: Types.ObjectId;
  recruiter: Types.ObjectId;

  constructor(Data: CreateInterview) {
    this.dateTime = Data.dateTime;
    this.interviewType = Data.interviewType;
    this.interviewer = Data.interviewer;
    this.questions = Data.questions;
    this.answers = Data.answers;
    this.interviewFeedback = Data.interviewFeedback;
    this.candidate = new Types.ObjectId(Data.candidate);
    this.hiringProcess = new Types.ObjectId(Data.hiringProcess);
    this.recruiter = new Types.ObjectId(Data.recruiter);
  }
}

export class UpdateInterviewDTO {
  id: Types.ObjectId;
  dateTime: Date;
  interviewType: string;
  interviewer: {
    name: string;
    position: string;
  };
  questions: string[];
  answers: string[];
  interviewFeedback: string;
  candidate: Types.ObjectId;
  hiringProcess: Types.ObjectId;
  recruiter: Types.ObjectId;

  constructor(Data: UpdateInterview) {
    this.id = new Types.ObjectId(Data.id);
    this.dateTime = Data.dateTime;
    this.interviewType = Data.interviewType;
    this.interviewer = Data.interviewer;
    this.questions = Data.questions;
    this.answers = Data.answers;
    this.interviewFeedback = Data.interviewFeedback;
    this.candidate = new Types.ObjectId(Data.candidate);
    this.hiringProcess = new Types.ObjectId(Data.hiringProcess);
    this.recruiter = new Types.ObjectId(Data.recruiter);
  }
}

//TYPES

type CreateInterview = {
  dateTime: Date;
  interviewType: string;
  interviewer: {
    name: string;
    position: string;
  };
  questions: string[];
  answers: string[];
  interviewFeedback: string;
  candidate: string;
  hiringProcess: string;
  recruiter: string;
};

type UpdateInterview = {
  id: string;
  dateTime: Date;
  interviewType: string;
  interviewer: {
    name: string;
    position: string;
  };
  questions: string[];
  answers: string[];
  interviewFeedback: string;
  candidate: string;
  hiringProcess: string;
  recruiter: string;
};
