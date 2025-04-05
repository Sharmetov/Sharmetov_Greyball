import 'reflect-metadata'; // decorators work properly thnx to this guy
import express from 'express'; //it's my http server, smth about graphql, not a full picture yet
import {ApolloServer} from 'apollo-server-express'; //graphql engine
import {buildSchema} from 'type-graphql' ; // builds graphql schema 
import { AppDataSource } from './data_source';
import {FighterResolver} from '.resolvers/FighterResolver' ; // fighter crud

const startServer = async() => { 
    
    await AppDataSource.initialize() ; // db connection

    const schema = await buildSchema ({
        resolvers: [FighterResolver],
        validate: false,
    }) ; //schema creation from resolvers

    const server = new ApolloServer ({schema}) ; // give apollo ur schema
    const app = express() ; //base of your web server

    await server.start() ; // apollo starts 
    server.applyMiddleware({app}) ; // merge apollo with express

    app.listen(4000, () =>
        console.log("Server ready") 
    ) //start the server

    startServer() ;
} ;
