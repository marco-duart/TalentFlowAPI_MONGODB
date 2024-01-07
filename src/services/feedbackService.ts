import FeedbackRepository from '../repositories/feedbackRepository';
import FeedbackDTO from './feedbackDTO';
import { IFeedback } from '../entities/Feedback';

class FeedbackService {
  private repository: FeedbackRepository;

  constructor(repository: FeedbackRepository) {
    this.repository = repository;
  }

  async createDocument(data: FeedbackDTO): Promise<IFeedback> {
    
    const createdDocument = await this.repository.create(data);
    return createdDocument;
  }

  async getDocumentById(id: string): Promise<IFeedback | null> {
    // Verificar se existe
    const document = await this.repository.findById(id);
    return document;
  }

}

export default FeedbackService;
