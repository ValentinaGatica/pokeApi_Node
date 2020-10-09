//src/app.ts
import express from "express";
import { Application } from 'express';
import bodyParser from "body-parser";
import cors from "cors";
//importing our controller
import { Controller } from "./main.controller";
import { MONGO_URL } from "./constants/pokeApi.constants";
import mongoose from "mongoose";

class App {
public app: Application;
//declaring our controller
public pokeController: Controller;
constructor() {
this.app = express();
this.setConfig();
//Creating and assigning a new instance of our controller
this.pokeController = new Controller(this.app);
}
private setConfig() {
this.app.use(bodyParser.json({ limit: "50mb" }));
this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
this.app.use(cors());
}
private setMongoConfig() {
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL, {useNewUrlParser: true});
   
}

}
export default new App().app;