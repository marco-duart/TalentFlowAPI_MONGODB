import { Model } from 'mongoose';
import BaseRepository from './Repository';
import { IApplicationStatus } from '../entities/ApplicationStatus';

class ApplicationStatusRepository extends BaseRepository<IApplicationStatus> {
  constructor(model: Model<IApplicationStatus>) {
    super(model);
  }

}

export default ApplicationStatusRepository;
