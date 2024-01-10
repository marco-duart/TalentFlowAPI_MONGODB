import { Model } from 'mongoose';
import BaseRepository from './Repository';
import { IInterview } from '../entities/Interview';

class InterviewRepository extends BaseRepository<IInterview> {
  constructor(model: Model<IInterview>) {
    super(model);
  }

}

export default InterviewRepository;
