import CompanyRepository from '../repositories/companyRepository';
import { UpdateCompanyDTO, CreateCompanyDTO } from '../dto/companyDTO';
import { ICompany } from '../entities/Company';
import { Schema } from 'mongoose';

class CompanyService {
  private repository: CompanyRepository;

  constructor(repository: CompanyRepository) {
    this.repository = repository;
  }

  async create(data: CreateCompanyDTO): Promise<ICompany> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<ICompany[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<ICompany | null> {
    return await this.repository.findById(new Schema.Types.ObjectId(id));
  }

  async update(id: string, data: UpdateCompanyDTO): Promise<ICompany | null> {
    return await this.repository.update(new Schema.Types.ObjectId(id), data)
  }

  async softDelete(id: string): Promise<ICompany | null> {
    return await this.repository.softDelete(new Schema.Types.ObjectId(id))
  }

}

export default CompanyService;
