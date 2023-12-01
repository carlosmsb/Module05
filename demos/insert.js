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
            name: 'Suzi Suzuki',
            extension: 1115,
            email: 'suzi@vectacorp.com',
            title: 'CEO',
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