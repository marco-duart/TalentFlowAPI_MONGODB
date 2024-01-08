import JobPostingRepository from '../repositories/jobPostingRepository';
import JobPostingDTO from './jobPostingDTO';
import { IJobPosting } from '../entities/JobPosting';

class JobPostingService {
  private repository: JobPostingRepository;

  constructor(repository: JobPostingRepository) {
    this.repository = repository;
  }

  async create(data: JobPostingDTO): Promise<IJobPosting> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IJobPosting[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IJobPosting> {
    return await this.repository.findById(id);
  }

  async update(id, data): Promise<IJobPosting> {
    return await this.repository.update(id, data)
  }

  async softDelete(id): Promise<IJobPosting> {
    return await this.repository.softDelete(id)
  }

}

export default JobPostingService;
