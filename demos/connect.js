// import { MongoClient } from 'mongodb'
// import {} from 'dotenv/config'
// const uri = process.env.DB
// const client = new MongoClient(uri)
// //  CONNECT TO DATABASE
// async function insertOne() {
//     try {
//         await client.connect(uri)
//         console.log('Connected to database...')
//         let database = client.db('vectacorp')
//         let employee = {
//             name: 'Employee Name',
//             extension: 1111,
//             email: 'employee@vectacorp.com',
//             title: 'Software Engineer',
//             dateHired: Date.now(),
//             currentlyEmployed: true
//         }
//         const result = await database
//             .collection('employees')
//             .insertOne(employee)
//             console.log(result)
//             console.log('1 document inserted into collection.')
//     } catch (err) {
//         console.log(err)
//     } finally {
//         await client.close()
//     }
// }
// insertOne()

import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'
const uri = process.env.DB
const client = new MongoClient(uri)
async function retrieveAll() {
    try {
        await client.connect(uri)
        console.log('Connected to database...')
        let database = client.db('vectacorp')
        let result = await database
            .collection('employees')
            .find({})
            .toArray()
        console.log(result)
    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }
}
retrieveAll()