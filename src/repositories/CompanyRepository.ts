import { Model } from 'mongoose';
import BaseRepository from './Repository';
import { ICompany } from '../entities/Company';

class CompanyRepository extends BaseRepository<ICompany> {
  constructor(model: Model<ICompany>) {
    super(model);
  }

}

export default CompanyRepository;
