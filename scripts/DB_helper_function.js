const path = require('path');


const loadEnvForCreateDrop = () => {

    const { NODE_ENV } = process.env

    if (NODE_ENV === 'production') {
        throw new Error('Unable to load create/drop scripts in production')
    }
        
    const envFile = process.argv.slice(2)[0] === 'test' ? '../.env.test' : '../.env'
        
    const result = require('dotenv').config({
         path: path.join(__dirname, envFile)
    })

    if (result.error) {
        throw (result.error)
    } 

    const PGArray = ['PGDATABASE', 'PGUSER', 'PGPASSWORD', 'PGHOST', 'PGPORT']
    const errorArray = []

for ( let i = 0; i < PGArray.length; i++) {

    let key = PGArray[i]

    if (!process.env[key] || process.env[key].trim() === '') {

        errorArray.push(key)
    }
}

    if (errorArray.length > 0) {
        throw new Error('undefined or missing strings')
    }
              
    const databaseName = process.env.PGDATABASE

    process.env.PGDATABASE = 'postgres'

    return databaseName
}

const loadEnvForAppMigrate = () => {

    const envFile = process.argv.slice(2)[0] === 'test' ? '../.env.test' : '../.env'
        
    const result = require('dotenv').config({
         path: path.join(__dirname, envFile)
    })

    if (result.error) 
        throw result.error;

   const PGArray = ['PGDATABASE', 'PGUSER', 'PGPASSWORD', 'PGHOST', 'PGPORT']
   const errorArray = []

for ( let i = 0; i < PGArray.length; i++) {

    let key = PGArray[i]

    if (!process.env[key] || process.env[key].trim() === '') {

        errorArray.push(key)
    }
}
   
     if (errorArray.length > 0) {
        throw new Error('undefined or missing strings')
    }
      
}



module.exports = { loadEnvForCreateDrop, loadEnvForAppMigrate };