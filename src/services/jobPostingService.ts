import JobPostingRepository from '../repositories/jobPostingRepository';
import { UpdateJobPostingDTO, CreateJobPostingDTO } from '../dto/jobPostingDTO';
import { IJobPosting } from '../entities/JobPosting';
import { Schema } from 'mongoose';

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

  async getById(id: string): Promise<IJobPosting | null> {
    return await this.repository.findById(new Schema.Types.ObjectId(id));
  }

  async update(id: string, data: UpdateJobPostingDTO): Promise<IJobPosting | null> {
    return await this.repository.update(new Schema.Types.ObjectId(id), data)
  }

  async softDelete(id: string): Promise<IJobPosting | null> {
    return await this.repository.softDelete(new Schema.Types.ObjectId(id))
  }

}

export default JobPostingService;
