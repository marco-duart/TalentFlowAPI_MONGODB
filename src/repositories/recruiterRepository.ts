import { Model } from 'mongoose';
import BaseRepository from './repository';
import { IRecruiter } from '../entities/Recruiter';

class RecruiterRepository extends BaseRepository<IRecruiter> {
  constructor(model: Model<IRecruiter>) {
    super(model);
  }

}

export default RecruiterRepository;
