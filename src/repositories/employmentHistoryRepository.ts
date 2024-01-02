import { Model } from 'mongoose';
import BaseRepository from './repository';
import { IEmploymentHistory } from '../entities/EmploymentHistory';

class EmploymentHistoryRepository extends BaseRepository<IEmploymentHistory> {
  constructor(model: Model<IEmploymentHistory>) {
    super(model);
  }

}

export default EmploymentHistoryRepository;
