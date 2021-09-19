import { MongoClient, Db } from 'mongodb'
import url from 'url';
import {connectToDatabase} from '../../util/mongodb';
const Bcrypt = require("bcryptjs");
export default async function handler(request, response) {
    const {db} = await connectToDatabase();
    if(request.method == 'POST'){
        try {
            const { email, password } = request.body
            const data = await db.collection("cadastros").find({ email: email }).toArray();
            const data2 = await db.collection("cadastros").find({ nickname: email }).toArray();
            if (data.length > 0) {
                // await db.collection("friends").updateOne({amigo: amigo}, {$set: {textarea: text}});
                if(Bcrypt.compareSync(request.body.password, data[0].password)) {
                    return response.status(201).json({ ok: "true", logged:"true", way:"Email", msg: data})
                } else {
                    return response.status(201).json({ ok: "true", logged:"false", way:"Email", msg: data})
                }
            } else if(data2.length > 0) {
                if(Bcrypt.compareSync(request.body.password, data2[0].password)) {
                    return response.status(201).json({ ok: "true", logged:"true", way:"Nick", msg: data})
                } else {
                    return response.status(201).json({ ok: "true", logged:"false", way:"Nick", msg: data})
                }
            } else {
                return response.status(201).json({ ok: "false", logged:"false", way:"not found", msg: data})
            }
        } catch (error) {
            response.status(500).send(error);
        }
    }

}