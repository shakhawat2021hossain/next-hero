
const { MongoClient, ServerApiVersion } = require('mongodb');


let db;
const connectDB = async () => {
    try {
        const uri = "mongodb+srv://shakhawathossainweb:3N2nlrgWJA7e65Zy@cluster0.28i6f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        db = client.db("next-hero")
        return db;

    } catch (error) {
        console.log(error);
    }
}

export default connectDB;
