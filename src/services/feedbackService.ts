import FeedbackRepository from '../repositories/feedbackRepository';
import FeedbackDTO from './feedbackDTO';
import { IFeedback } from '../entities/Feedback';

class FeedbackService {
  private repository: FeedbackRepository;

  constructor(repository: FeedbackRepository) {
    this.repository = repository;
  }

  async create(data: FeedbackDTO): Promise<IFeedback> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IFeedback[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IFeedback> {
    return await this.repository.findById(id);
  }

  async update(id, data): Promise<IFeedback> {
    return await this.repository.update(id, data)
  }

  async softDelete(id): Promise<IFeedback> {
    return await this.repository.softDelete(id)
  }

}

export default FeedbackService;
