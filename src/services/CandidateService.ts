import { hash } from 'bcrypt';
import CandidateRepository from '../repositories/CandidateRepository';
import { UpdateCandidateDTO, CreateCandidateDTO } from '../dto/CandidateDTO';
import { ICandidate } from '../entities/Candidate';
import { UserAlreadyExistsError } from '../shared/errors/UserAlreadyExistsError';


class CandidateService {
  private repository: CandidateRepository;

  constructor(repository: CandidateRepository) {
    this.repository = repository;
  }

  async create(data: CreateCandidateDTO): Promise<ICandidate> {
    const candidateAlreadyExists = await this.repository.findByEmail(data.email)
    if(candidateAlreadyExists) {
      throw new UserAlreadyExistsError(candidateAlreadyExists.email)
    }

    const payload = {
      ...data,
      password: await hash(data.password, 8)
    }

    const result = await this.repository.create(payload);

    return result
  }

  async getAll(): Promise<ICandidate[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<ICandidate | null> {
    return await this.repository.findById(id);
  }

  async update(id: string, data: UpdateCandidateDTO): Promise<ICandidate | null> {
    return await this.repository.update(id, data)
  }

  async softDelete(id: string): Promise<ICandidate | null> {
    return await this.repository.softDelete(id)
  }

}

export default CandidateService;
