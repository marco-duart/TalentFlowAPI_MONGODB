import CandidateRepository from '../repositories/candidateRepository';
import { UpdateCandidateDTO, CreateCandidateDTO } from '../dto/candidateDTO';
import { ICandidate } from '../entities/Candidate';
import { IApplicationDocuments } from '../entities/ApplicationDocuments';
import { Schema } from 'mongoose';

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

  async getById(id: string): Promise<ICandidate | null> {
    return await this.repository.findById(new Schema.Types.ObjectId(id));
  }

  async update(id: string, data: UpdateCandidateDTO): Promise<ICandidate | null> {
    return await this.repository.update(new Schema.Types.ObjectId(id), data)
  }

  async softDelete(id: string): Promise<ICandidate | null> {
    return await this.repository.softDelete(new Schema.Types.ObjectId(id))
  }

}

export default CandidateService;
