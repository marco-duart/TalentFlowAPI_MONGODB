import InterviewRepository from '../repositories/interviewRepository';
import { UpdateInterviewDTO, CreateInterviewDTO } from '../dto/interviewDTO';
import { IInterview } from '../entities/Interview';

class InterviewService {
  private repository: InterviewRepository;

  constructor(repository: InterviewRepository) {
    this.repository = repository;
  }

  async create(data: CreateInterviewDTO): Promise<IInterview> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IInterview[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IInterview> {
    return await this.repository.findById(id);
  }

  async update(id, data: UpdateInterviewDTO): Promise<IInterview> {
    return await this.repository.update(id, data)
  }

  async softDelete(id): Promise<IInterview> {
    return await this.repository.softDelete(id)
  }

}

export default InterviewService;
