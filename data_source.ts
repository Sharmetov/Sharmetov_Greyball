import {DataSource} from "typeorm" ;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "nurdauletsarmetov",
    password: "12345678",
    database: "greyball" ,
    synchronize: false,
    logging: true,
    entities: [
        __dirname + "/Entities/*.ts"
    ],
}) ;