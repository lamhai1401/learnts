import { UserModel } from "./mongo/models/user";
import { connect, disconnect } from "./mongo";

(async() => {
    connect();

    const users = [
        { userID: "1", firstName: "Emma", lastName: "Bradley", age: 34 },
        { userID: "2", firstName: "Elise", lastName: "Conner", age: 62 },
        { userID: "3", firstName: "Jack", lastName: "Lawson", age: 20 },
        { userID: "4", firstName: "Oliver", lastName: "Moss", age: 80 },
        { userID: "5", firstName: "Jamie", lastName: "Reid", age: 52 },
        { userID: "6", firstName: "Aidan", lastName: "Bradley", age: 73 },
        { userID: "7", firstName: "Jordan", lastName: "Gallagher", age: 27 },
        { userID: "8", firstName: "Erin", lastName: "Miles", age: 23 },
        { userID: "9", firstName: "William", lastName: "May", age: 39 },
        { userID: "10", firstName: "Ethan", lastName: "Butler", age: 68 },
    ];

    try {
        for (const user of users) {
            let users = await UserModel.create(user);
            console.log(`Created user ${user.firstName} ${user.lastName}`);
        }
        disconnect();
    } catch (e) {
        console.error(e);
    }
})()