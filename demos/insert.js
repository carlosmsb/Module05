import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'
const uri = process.env.DB
const client = new MongoClient(uri)
//  CONNECT TO DATABASE
async function insertOne() {
    try {
        await client.connect(uri)
        console.log('Connected to database...')
        let database = client.db('vectacorp')
        let employee = {
            name: 'Delete User',
            extension: 1116,
            email: 'delete@vectacorp.com',
            title: 'pawn',
            dateHired: Date.now(),
            currentlyEmployed: true
        }
        const result = await database
            .collection('employees')
            .insertOne(employee)
            console.log(result)
            console.log('1 document inserted into collection.')
    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }
}
insertOne()