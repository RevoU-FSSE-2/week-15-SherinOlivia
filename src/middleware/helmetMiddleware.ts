import helmet from "helmet";
import { Express } from 'express';

const helmetConfig = (app: Express) => {
    app.use(helmet())
}

export default helmetConfig