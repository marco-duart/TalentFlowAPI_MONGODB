import InterviewRepository from '../repositories/interviewRepository';
import { UpdateInterviewDTO, CreateInterviewDTO } from '../dto/interviewDTO';
import { IInterview } from '../entities/Interview';
import { Schema } from 'mongoose';

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

  async getById(id: string): Promise<IInterview | null> {
    return await this.repository.findById(new Schema.Types.ObjectId(id));
  }

  async update(id: string, data: UpdateInterviewDTO): Promise<IInterview | null> {
    return await this.repository.update(new Schema.Types.ObjectId(id), data)
  }

  async softDelete(id: string): Promise<IInterview | null> {
    return await this.repository.softDelete(new Schema.Types.ObjectId(id))
  }

}

export default InterviewService;
