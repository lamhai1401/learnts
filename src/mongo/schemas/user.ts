import { Schema } from "mongoose";
import { findOneOrCreate, findByAge } from "../statics/user";
import { setLastUpdated, sameLastName } from "../methods/user";


export const UserSchema = new Schema({
    userID: String,
    firstName: {
        type: String,
        default: "nul"
    },
    lastName: {
        type: String,
        default: "nul"
    },
    age: {
        type: Number,
        default: 0
    },
    dateOfEntry: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    }
});

UserSchema.statics.findOneOrCreate = findOneOrCreate
UserSchema.statics.findByAge = findByAge

UserSchema.methods.setLastUpdated = setLastUpdated;
UserSchema.methods.sameLastName = sameLastName;