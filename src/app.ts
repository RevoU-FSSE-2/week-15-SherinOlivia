import express, {Request, Response, NextFunction} from 'express';
import mongoMiddleware from './middleware/mongoMiddleware'
import 'dotenv/config'
import router from './router/mainRouter';

const port = process.env.PORT;
const app = express()

app.use(express.json());
app.use(mongoMiddleware)
app.use(router)

app.listen(port, () => {
  console.log(`Server is running on port:${port}`)
})