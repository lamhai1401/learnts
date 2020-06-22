import Mongoose from 'mongoose';

// add docker
// docker run -d -p 27017:27017 mongo:4

console.log(Mongoose)

let dataBase: Mongoose.Connection;

Mongoose.set("useFindAndModify", true)

export const connect = async () => {
     // add your own uri below
    const uri = `mongodb://localhost/livestream?retryWrites=true&gssapiServiceName=mongodb`;

    if (dataBase) {
        return;
    }

    await Mongoose.connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });

    dataBase = Mongoose.connection;

    dataBase.once("open", async () => {
        console.log("Connected to dataBase");
    });
    dataBase.on("error", () => {
        console.log("Error connecting to dataBase");
    });
}

export const disconnect = () => {
    if (!dataBase) {
        return;
    }
    Mongoose.disconnect();
}