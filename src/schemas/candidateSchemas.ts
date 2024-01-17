import yup from "yup";

export interface ICreateCandidate {
  name: string;
  email: string;
  phoneNumber?: string;
  resume?: string;
  portfolio?: string;
  academicHistory?: {
    title: string;
    institution: string;
    degree: string;
    startDate: Date;
    endDate: Date;
  }[];
  skills?: string[];
  professionalLinks?: {
    title: string;
    link: string;
  }[];
  user: string;
  employmentHistory?: string;
  applicationStatus?: string[];
  interviews?: string[];
  feedback?: string[];
  applicationDocuments?: string[];
}

export const createCandidateValidate: yup.Schema<ICreateCandidate> = yup.object().shape({
  name: yup.string().required().min(3),
  email: yup.string().required().email(),
  user: yup.string().required(),
})
