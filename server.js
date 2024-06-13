const app = require('./app')
// const 

async function start(){
    try{
    //   const database = new DatabaseConnector()
    //   await database.connect()
  
      const PORT = 3000
      app.listen(PORT, (req, res) =>{
        console.log('Server started on port 3000')
      })
      
    }catch(err){
        console.log("Failed to start the sever : ",err)
    }
  }
  
  
  start()