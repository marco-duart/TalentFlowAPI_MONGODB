import JobPostingRepository from '../repositories/jobPostingRepository';
import JobPostingDTO from './jobPostingDTO';
import { IJobPosting } from '../entities/JobPosting';

class JobPostingService {
  private repository: JobPostingRepository;

  constructor(repository: JobPostingRepository) {
    this.repository = repository;
  }

  async createDocument(data: JobPostingDTO): Promise<IJobPosting> {
    
    const createdDocument = await this.repository.create(data);
    return createdDocument;
  }

  async getDocumentById(id: string): Promise<IJobPosting | null> {
    // Verificar se existe
    const document = await this.repository.findById(id);
    return document;
  }

}

export default JobPostingService;
