import { MongoClient } from 'mongodb'

async function handler(req, res) {
          if(req.method === "POST") {
                    const data = req.body;

                    const { title, image, address, description} = data;

                    const client = await MongoClient.connect(process.env.CONNECT_WITH_DB_KEY);
                    const db = client.db();

                    const meetupsCollection = db.collection("meetups");
                    
                    const result = await meetupsCollection.insertOne({title, image, address, description});

                    console.log(result);

                    client.close();

                    res.status(201).json({message: "Meetup inserted!"});
          }
}

export default handler;