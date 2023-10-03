import {Request, Response, NextFunction} from 'express';
import { Db, MongoClient } from 'mongodb';
import 'dotenv/config'

const uri ="mongodb+srv://Sherin:4wxVNRuop2VBoLjL@cluster1.a1xaobt.mongodb.net/"


const mongoMiddleware = async (req: any, res: Response, next : NextFunction) => {
    try {
        const mongoClient = await new MongoClient(uri).connect();
        const db: Db = mongoClient.db('week15-cors-learning');
    
        req.db = db
        if(db){
            console.log("MongoDB Connection Succeed..!");
            next();
        } else {
            console.log("MongoDB Connection Failed...");
        }
        
    } catch (error) {
        console.log("MongoDB Connection Failed..");
    }
  };
  
export default mongoMiddleware;