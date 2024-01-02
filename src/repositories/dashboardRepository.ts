import { Model } from 'mongoose';
import BaseRepository from './repository';
import { IDashboard } from '../entities/Dashboard';

class DashboardRepository extends BaseRepository<IDashboard> {
  constructor(model: Model<IDashboard>) {
    super(model);
  }

}

export default DashboardRepository;
