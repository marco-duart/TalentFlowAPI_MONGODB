import { Model } from 'mongoose';
import BaseRepository from './Repository';
import { IHiringProcess } from '../entities/HiringProcess';

class HiringProcessRepository extends BaseRepository<IHiringProcess> {
  constructor(model: Model<IHiringProcess>) {
    super(model);
  }

}

export default HiringProcessRepository;
