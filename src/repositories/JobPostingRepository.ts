import { Model } from 'mongoose';
import BaseRepository from './Repository';
import { IJobPosting } from '../entities/JobPosting';

class JobPostingRepository extends BaseRepository<IJobPosting> {
  constructor(model: Model<IJobPosting>) {
    super(model);
  }

}

export default JobPostingRepository;
