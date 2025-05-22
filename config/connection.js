import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

let url = process.env.MONGO_URL
console.log(url)


let connectiondb = () => {
    try {

        mongoose.connect(url)
        .then(()=> {
            console.log("Mongo Database Connected SuccessFully");
            
        })
        
    } catch (error) {
       
        console.log(error.message);
        
    }
}

export default connectiondb