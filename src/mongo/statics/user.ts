import { IUserDocument, IUserModel } from './../types/user';

export async function findOneOrCreate(
    this: IUserModel,
    userID: string
): Promise<IUserDocument> {
    const record = await this.findOne({userID});
    if (record) {
        return record
    }
    return this.create({
        userID
    });
}

export async function findByAge(
    this: IUserModel,
    min?: number,
    max?: number
): Promise<IUserDocument[]> {
    return this.find({
        age: { $gte: min || 0, $lte: max || Infinity }
    })
}