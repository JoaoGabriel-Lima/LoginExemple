import { MongoClient, Db } from 'mongodb'
import url from 'url';
import {connectToDatabase} from '../../util/mongodb';
const Bcrypt = require("bcryptjs");
export default async function handler(request, response) {
    const {db} = await connectToDatabase();
    if(request.method == 'POST'){
        try {
            const { email, nickname, discord, password } = request.body
            const data = await db.collection("cadastros").find({ email: email }).toArray();
            const data2 = await db.collection("cadastros").find({ nickname: nickname }).toArray();
            if (data.length > 0 || data2.length > 0) {
                // await db.collection("friends").updateOne({amigo: amigo}, {$set: {textarea: text}});
                return response.status(201).json({ ok: "true", msg: "Não Salvo"})
            } else {
                const cryptpassword = Bcrypt.hashSync(request.body.password, 10);
                await db.collection("cadastros").insertOne({email: email, nickname: nickname, discordreg: discord, password: cryptpassword})
                return response.status(201).json({ ok: "true", msg: "Salvo"})
            }
        } catch (error) {
            response.status(500).send(error);
        }
    }

}