import CompanyRepository from '../repositories/companyRepository';
import CompanyDTO from './companyDTO';
import { ICompany } from '../entities/Company';

class CompanyService {
  private repository: CompanyRepository;

  constructor(repository: CompanyRepository) {
    this.repository = repository;
  }

  async createDocument(data: CompanyDTO): Promise<ICompany> {
    
    const createdDocument = await this.repository.create(data);
    return createdDocument;
  }

  async getDocumentById(id: string): Promise<ICompany | null> {
    // Verificar se existe
    const document = await this.repository.findById(id);
    return document;
  }

}

export default CompanyService;
