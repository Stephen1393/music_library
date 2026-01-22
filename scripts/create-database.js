const { Client } = require('pg');
const { loadEnvForCreateDrop } = require('./DB_helper_function')

const createDatabase = async () => { 

    const database = loadEnvForCreateDrop().toLowerCase()

     const validateDB = /^[A-Za-z_][A-Za-z0-9_]*$/

    if (!validateDB.test(database)) {
        throw new Error('Invalid database name!')
    }

    const client = new Client({database: 'postgres'}) 

try {
    await client.connect() 
    console.log('connecting to postgresSQL server...')

    await client.query(`CREATE DATABASE "${database}"`) 
    console.log(`database ${database} created!`)

    } catch (err) {
        if (err.code === '42P04') {
            console.log("database already exists!")
            return
        }
        else {
            throw err;
        }
    } finally {
        await client.end()
    }
}

createDatabase().catch((err) => {
  console.error(err);
});