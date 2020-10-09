//src/services/pokemon.service.ts
import { Request, Response } from "express";
import { WELCOME_MESSAGE } from "../constants/pokeApi.constants"; 
//importing our model
import { Pokemon } from "../models/pokemon.model"; 
export class PokeService {                         
public welcomeMessage(req: Request, res: Response) {  
 res.status(200).send(WELCOME_MESSAGE);
}
}