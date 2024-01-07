import RecruiterRepository from '../repositories/recruiterRepository';
import RecruiterDTO from './recruiterDTO';
import { IRecruiter } from '../entities/Recruiter';

class RecruiterService {
  private repository: RecruiterRepository;

  constructor(repository: RecruiterRepository) {
    this.repository = repository;
  }

  async createDocument(data: RecruiterDTO): Promise<IRecruiter> {
    
    const createdDocument = await this.repository.create(data);
    return createdDocument;
  }

  async getDocumentById(id: string): Promise<IRecruiter | null> {
    // Verificar se existe
    const document = await this.repository.findById(id);
    return document;
  }

}

export default RecruiterService;
