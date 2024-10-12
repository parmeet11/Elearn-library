import express from "express";
import { createBook } from "./bookController";


const bookRouter = express.Router();

//Routes
//api//books
bookRouter.post("/register", createBook);


export default bookRouter;