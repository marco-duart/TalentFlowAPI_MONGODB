import CandidateRepository from '../repositories/candidateRepository';
import { UpdateCandidateDTO, CreateCandidateDTO } from '../dto/candidateDTO';
import { ICandidate } from '../entities/Candidate';
import { IApplicationDocuments } from '../entities/ApplicationDocuments';

class CandidateService {
  private repository: CandidateRepository;

  constructor(repository: CandidateRepository) {
    this.repository = repository;
  }

  async create(data: CreateCandidateDTO): Promise<ICandidate> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<ICandidate[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<ICandidate> {
    return await this.repository.findById(id);
  }

  async update(id, data: UpdateCandidateDTO): Promise<ICandidate> {
    return await this.repository.update(id, data)
  }

  async softDelete(id): Promise<IApplicationDocuments> {
    return await this.repository.softDelete(id)
  }

}

export default CandidateService;
