import morgan from "morgan";
import { Express } from "express";

const morganConfig = (app: Express) => {
    app.use(morgan('combined'))
}

export default morganConfig