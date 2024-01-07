import CandidateRepository from '../repositories/candidateRepository';
import CandidateDTO from './candidateDTO';
import { ICandidate } from '../entities/Candidate';

class CandidateService {
  private repository: CandidateRepository;

  constructor(repository: CandidateRepository) {
    this.repository = repository;
  }

  async createDocument(data: CandidateDTO): Promise<ICandidate> {
    
    const createdDocument = await this.repository.create(data);
    return createdDocument;
  }

  async getDocumentById(id: string): Promise<ICandidate | null> {
    // Verificar se existe
    const document = await this.repository.findById(id);
    return document;
  }

}

export default CandidateService;
