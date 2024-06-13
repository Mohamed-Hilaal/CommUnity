const mongoose = require('mongoose')
require('dotenv').config()

class DatabaseConnector{
    
    constructor() {
        this.databaseURL = process.env.MONGOOSE_URL
    }

    async connect() {

        try{
            await mongoose.connect(this.databaseURL, { 
                useUnifiedTopology: true,
                useNewUrlParser: true 
            })
            console.log('Database connected successfully!!!');
        }
        catch(err){
            console.log("Trouble connecting to MongoDB : ", err);
        }
    }

    async close(){

        try{
            await mongoose.connection.close()
        }catch(err){
            console.log("Trouble closing connection with MongoDB : ", err);
        }
    }
}

module.exports = DatabaseConnector