import EmploymentRepository from '../repositories/employmentRepository';
import EmploymentDTO from './employmentDTO';
import { IEmployment } from '../entities/Employment';

class EmploymentService {
  private repository: EmploymentRepository;

  constructor(repository: EmploymentRepository) {
    this.repository = repository;
  }

  async createDocument(data: EmploymentDTO): Promise<IEmployment> {
    
    const createdDocument = await this.repository.create(data);
    return createdDocument;
  }

  async getDocumentById(id: string): Promise<IEmployment | null> {
    // Verificar se existe
    const document = await this.repository.findById(id);
    return document;
  }

}

export default EmploymentService;
