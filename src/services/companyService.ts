import CompanyRepository from '../repositories/companyRepository';
import CompanyDTO from './companyDTO';
import { ICompany } from '../entities/Company';

class CompanyService {
  private repository: CompanyRepository;

  constructor(repository: CompanyRepository) {
    this.repository = repository;
  }

  async create(data: CompanyDTO): Promise<ICompany> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<ICompany[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<ICompany> {
    return await this.repository.findById(id);
  }

  async update(id, data): Promise<ICompany> {
    return await this.repository.update(id, data)
  }

  async softDelete(id): Promise<ICompany> {
    return await this.repository.softDelete(id)
  }

}

export default CompanyService;
