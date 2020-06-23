import { IUserDocument } from './../types/user';
import { model } from 'mongoose';
import {UserSchema} from "../schemas/user";

export const UserModel = model<IUserDocument>("user", UserSchema)