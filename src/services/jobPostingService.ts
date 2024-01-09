import JobPostingRepository from '../repositories/jobPostingRepository';
import { UpdateJobPostingDTO, CreateJobPostingDTO } from '../dto/jobPostingDTO';
import { IJobPosting } from '../entities/JobPosting';

class JobPostingService {
  private repository: JobPostingRepository;

  constructor(repository: JobPostingRepository) {
    this.repository = repository;
  }

  async create(data: CreateJobPostingDTO): Promise<IJobPosting> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IJobPosting[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IJobPosting> {
    return await this.repository.findById(id);
  }

  async update(id, data: UpdateJobPostingDTO): Promise<IJobPosting> {
    return await this.repository.update(id, data)
  }

  async softDelete(id): Promise<IJobPosting> {
    return await this.repository.softDelete(id)
  }

}

export default JobPostingService;
