import InterviewRepository from '../repositories/interviewRepository';
import InterviewDTO from './interviewDTO';
import { IInterview } from '../entities/Interview';

class InterviewService {
  private repository: InterviewRepository;

  constructor(repository: InterviewRepository) {
    this.repository = repository;
  }

  async create(data: InterviewDTO): Promise<IInterview> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IInterview[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IInterview> {
    return await this.repository.findById(id);
  }

  async update(id): Promise<IInterview> {
    return await this.repository.update(id)
  }

  async softDelete(id): Promise<IInterview> {
    return await this.repository.softDelete(id)
  }

}

export default InterviewService;
