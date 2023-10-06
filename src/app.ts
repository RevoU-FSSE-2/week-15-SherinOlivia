import express from 'express';
import 'dotenv/config'
import { router, routerX, routerY } from './router'
import cors from 'cors';
import escapeHtml from 'escape-html';
import mongoMiddleware from './middleware/mongoMiddleware';
import requestIdMiddleware from './middleware/requestMiddleware';
// import helmetConfig from './middleware/helmetMiddleware';
// import morganConfig from './middleware/morganMiddleware';
import helmet from 'helmet';
import morgan from 'morgan';

const port = process.env.PORT;
const app = express()
app.use(express.urlencoded({ extended: true }));

// middlewares
app.use(express.json());
app.use(mongoMiddleware)
app.use(requestIdMiddleware);
app.use(helmet({
  frameguard: { action: 'deny' }
}));
app.use(morgan('combined'));

// cors config:
const GlobalcorsOptions = {
    origin: ['https://w15-fe.roozone.site', 'https://w15fe.vercel.app', 'http://localhost:5173'],
}

const ClientXoptions = {
    origin: ['https://w15fe.vercel.app','http://localhost:5173'],
    methods: ['GET', 'POST'],
}
const ClientYoptions = {
    origin: ['https://w15-fe.roozone.site','http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }

// router
app.use(router)
app.use('/client-x', cors(ClientXoptions), routerX);
app.use('/client-y', cors(ClientYoptions), routerY);

// xss?
app.get('/', (req, res) => {
const htmlScript = '<script>alert("Caed mil");</script>';
const escapeHtmlUse = escapeHtml(htmlScript);
res.send(`<div>${escapeHtmlUse}</div>`);
console.log(escapeHtmlUse)
})


app.listen(port, () => {
  console.log(`Server is running on port:${port}`)
})