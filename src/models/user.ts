import { prop, getModelForClass } from '@typegoose/typegoose';

class User {
    @prop()
    public name?:string;
}

