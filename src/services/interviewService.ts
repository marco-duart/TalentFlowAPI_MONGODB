import InterviewRepository from '../repositories/interviewRepository';
import InterviewDTO from './interviewDTO';
import { IInterview } from '../entities/Interview';

class InterviewService {
  private repository: InterviewRepository;

  constructor(repository: InterviewRepository) {
    this.repository = repository;
  }

  async createDocument(data: InterviewDTO): Promise<IInterview> {
    
    const createdDocument = await this.repository.create(data);
    return createdDocument;
  }

  async getDocumentById(id: string): Promise<IInterview | null> {
    // Verificar se existe
    const document = await this.repository.findById(id);
    return document;
  }

}

export default InterviewService;
