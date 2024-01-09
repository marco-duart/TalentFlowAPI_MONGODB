import CompanyRepository from '../repositories/companyRepository';
import { UpdateCompanyDTO, CreateCompanyDTO } from '../dto/companyDTO';
import { ICompany } from '../entities/Company';

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

  async getById(id: string): Promise<ICompany> {
    return await this.repository.findById(id);
  }

  async update(id, data: UpdateCompanyDTO): Promise<ICompany> {
    return await this.repository.update(id, data)
  }

  async softDelete(id): Promise<ICompany> {
    return await this.repository.softDelete(id)
  }

}

export default CompanyService;
