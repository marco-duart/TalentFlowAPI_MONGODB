import CandidateRepository from '../repositories/candidateRepository';
import CandidateDTO from './candidateDTO';
import { ICandidate } from '../entities/Candidate';
import { IApplicationDocuments } from '../entities/ApplicationDocuments';

class CandidateService {
  private repository: CandidateRepository;

  constructor(repository: CandidateRepository) {
    this.repository = repository;
  }

  async create(data: CandidateDTO): Promise<ICandidate> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<ICandidate[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<ICandidate> {
    return await this.repository.findById(id);
  }

  async update(id, data): Promise<ICandidate> {
    return await this.repository.update(id, data)
  }

  async softDelete(id): Promise<IApplicationDocuments> {
    return await this.repository.softDelete(id)
  }

}

export default CandidateService;
