import { Model } from 'mongoose';
import BaseRepository from './repository';
import { IApplicationStatus } from '../entities/ApplicationStatus';

class ApplicationStatusRepository extends BaseRepository<IApplicationStatus> {
  constructor(model: Model<IApplicationStatus>) {
    super(model);
  }

}

export default ApplicationStatusRepository;
