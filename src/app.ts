import express from 'express';
import mongoMiddleware from './middleware/mongoMiddleware';
import 'dotenv/config'
import { router, routerX, routerY } from './router'
import cors from 'cors';
// import helmet from 'helmet';
// import escapeHtml from 'escape-html';
// import morgan from 'morgan';
import requestIdMiddleware from './middleware/requestMiddleware';

const port = process.env.PORT;
const app = express()
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(mongoMiddleware)
app.use(requestIdMiddleware);

const GlobalcorsOptions = {
    origin: ['https://w15fe.roozone.site', 'https://w15sh-fe.netlify.app', 'http://localhost:5173', 'http://localhost:8000', 'http://localhost:5555'],
}

const ClientXoptions = {
    origin: ['https://w15fe.roozone.site', 'https://w15sh-fe.netlify.app', 'http://localhost:5173'],
    methods: ['GET', 'POST'],
}
const ClientYoptions = {
    origin: 'http://localhost:8000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }

// CORS config
app.use('/client-x', cors(ClientXoptions));
app.use('/client-y', cors(ClientYoptions));

// router X & Y
app.use(router)
app.use('/client-x', routerX);
app.use('/client-y', routerY);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`)
})