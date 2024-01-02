import { Model } from 'mongoose';
import BaseRepository from './repository';
import { IFeedback } from '../entities/Feedback';

class FeedbackRepository extends BaseRepository<IFeedback> {
  constructor(model: Model<IFeedback>) {
    super(model);
  }

}

export default FeedbackRepository;
