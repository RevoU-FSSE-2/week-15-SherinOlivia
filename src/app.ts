import express from 'express';
import mongoMiddleware from './middleware/mongoMiddleware';
import 'dotenv/config'
import { router, routerX, routerY } from './router'
import cors from 'cors';
import escapeHtml from 'escape-html';
import requestIdMiddleware from './middleware/requestMiddleware';
import helmetConfig from './middleware/helmetMiddleware';
import morganConfig from './middleware/morganMiddleware';

const port = process.env.PORT;
const app = express()
app.use(express.urlencoded({ extended: true }));

// middlewares
app.use(express.json());
app.use(mongoMiddleware)
app.use(requestIdMiddleware);
app.use(helmetConfig)
app.use(morganConfig)

// cors config:
const GlobalcorsOptions = {
    origin: ['https://w15fe.roozone.site', 'https://w15sh-fe.netlify.app', 'http://localhost:5173'],
}

const ClientXoptions = {
    origin: ['https://w15sh-fe.netlify.app', 'http://localhost:5173'],
    methods: ['GET', 'POST'],
}
const ClientYoptions = {
    origin: ['https://w15fe.roozone.site', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }

app.use('/client-x', cors(ClientXoptions));
app.use('/client-y', cors(ClientYoptions));

// router X & Y
app.use(router)
app.use('/client-x', routerX);
app.use('/client-y', routerY);

// xss?
const htmlScript = '<script>alert("Caed mil");</script>';
const escapeHtmlUse = escapeHtml(htmlScript);
console.log(escapeHtmlUse)

app.listen(port, () => {
  console.log(`Server is running on port:${port}`)
})