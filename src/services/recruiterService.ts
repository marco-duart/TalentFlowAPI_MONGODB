import RecruiterRepository from '../repositories/recruiterRepository';
import { UpdateRecruiterDTO, CreateRecruiterDTO } from '../dto/recruiterDTO';
import { IRecruiter } from '../entities/Recruiter';

class RecruiterService {
  private repository: RecruiterRepository;

  constructor(repository: RecruiterRepository) {
    this.repository = repository;
  }

  async create(data: CreateRecruiterDTO): Promise<IRecruiter> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IRecruiter> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IRecruiter> {
    return await this.repository.findById(id);
  }

  async update(id, data: UpdateRecruiterDTO): Promise<IRecruiter> {
    return await this.repository.update(id, data)
  }

  async softDelete(id): Promise<IRecruiter> {
    return await this.repository.softDelete(id)
  }

}

export default RecruiterService;
