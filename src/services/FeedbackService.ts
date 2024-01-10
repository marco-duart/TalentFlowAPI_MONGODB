import FeedbackRepository from '../repositories/FeedbackRepository';
import { UpdateFeedbackDTO, CreateFeedbackDTO } from '../dto/FeedbackDTO';
import { IFeedback } from '../entities/Feedback';
import { Schema } from 'mongoose';

class FeedbackService {
  private repository: FeedbackRepository;

  constructor(repository: FeedbackRepository) {
    this.repository = repository;
  }

  async create(data: CreateFeedbackDTO): Promise<IFeedback> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IFeedback[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IFeedback | null> {
    return await this.repository.findById(new Schema.Types.ObjectId(id));
  }

  async update(id: string, data: UpdateFeedbackDTO): Promise<IFeedback | null> {
    return await this.repository.update(new Schema.Types.ObjectId(id), data)
  }

  async softDelete(id: string): Promise<IFeedback | null> {
    return await this.repository.softDelete(new Schema.Types.ObjectId(id))
  }

}

export default FeedbackService;
