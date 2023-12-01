import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'

//DELETE DOCUMENT
MongoClient.connect(process.env.DB, (err, database) => {
    if (err) throw err
    console.log('Connected to database...')
    
})