import "reflect-metadata"
import { AppDataSource } from "./data_source"

AppDataSource.initialize().then(()=> {
    console.log("Data Source has been initialized!");
}).catch((err)=>{
    console.error("Error during Data Source initialization", err);
})