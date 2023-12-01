import { MongoClient, ObjectId } from 'mongodb'
import {} from 'dotenv/config'

//DELETE DOCUMENT
MongoClient.connect(process.env.DB, (err, database) => {
    if (err) throw err
    console.log('Connected to database...')

   // let query = { name: 'Delete User' }
    let query = { _id: ObjectId('6569aa0870b0e35923230ad7') }

    database
            .db('vectacorp')
            .collection('employees')
            deleteOne(query, (err, res) => {
                if (err) throw err
                console.log('1 document deleted')
                database.close()
            })

})