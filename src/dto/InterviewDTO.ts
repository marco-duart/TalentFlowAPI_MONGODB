import { Schema } from "mongoose";

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
  candidate: Schema.Types.ObjectId;
  hiringProcess: Schema.Types.ObjectId;
  recruiter: Schema.Types.ObjectId;

  constructor(Data: CreateInterview) {
    this.dateTime = Data.dateTime;
    this.interviewType = Data.interviewType;
    this.interviewer = Data.interviewer;
    this.questions = Data.questions;
    this.answers = Data.answers;
    this.interviewFeedback = Data.interviewFeedback;
    this.candidate = new Schema.Types.ObjectId(Data.candidate);
    this.hiringProcess = new Schema.Types.ObjectId(Data.hiringProcess);
    this.recruiter = new Schema.Types.ObjectId(Data.recruiter);
  }
}

export class UpdateInterviewDTO {
  id: Schema.Types.ObjectId;
  dateTime: Date;
  interviewType: string;
  interviewer: {
    name: string;
    position: string;
  };
  questions: string[];
  answers: string[];
  interviewFeedback: string;
  candidate: Schema.Types.ObjectId;
  hiringProcess: Schema.Types.ObjectId;
  recruiter: Schema.Types.ObjectId;

  constructor(Data: UpdateInterview) {
    this.id = new Schema.Types.ObjectId(Data.id);
    this.dateTime = Data.dateTime;
    this.interviewType = Data.interviewType;
    this.interviewer = Data.interviewer;
    this.questions = Data.questions;
    this.answers = Data.answers;
    this.interviewFeedback = Data.interviewFeedback;
    this.candidate = new Schema.Types.ObjectId(Data.candidate);
    this.hiringProcess = new Schema.Types.ObjectId(Data.hiringProcess);
    this.recruiter = new Schema.Types.ObjectId(Data.recruiter);
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
