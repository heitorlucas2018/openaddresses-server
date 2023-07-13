import Mongoose, { ConnectOptions } from "mongoose";
import Logger from "../console/console";

const uriDatasource = process.env.URI_MONGO ? process.env.URI_MONGO : "mongodb://root:example@mongo:27017";

const options:ConnectOptions = {
    user: "roor",
    pass: "example"
}

export default async function MongoConfig() {
    await Mongoose.connect(uriDatasource)
        .then(e => Logger.info("Connected"))
        .catch(console.dir)
}