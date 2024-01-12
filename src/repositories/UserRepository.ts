import { Model } from "mongoose";
import BaseRepository from "./Repository";
import { IUser } from "../entities/User";

class UserRepository extends BaseRepository<IUser> {
  constructor(model: Model<IUser>) {
    super(model);
  }
}

export default UserRepository;
