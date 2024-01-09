import { CompanySchema, ICompany } from "../entities/Company";
import CompanyRepository from "../repositories/companyRepository";
import CompanyService from "../services/companyService";
import CompanyController from "../controllers/companyController";
import { model } from "mongoose";

export class CompanyModule {
  static make() {
    const CompanyModel = model<ICompany>('Company', CompanySchema);
    const repository = new CompanyRepository(CompanyModel)
    const service = new CompanyService(repository)
    const controller = new CompanyController(service)

    return {controller}
  }
}
