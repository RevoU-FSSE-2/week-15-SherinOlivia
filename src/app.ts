import express from 'express';
import 'dotenv/config'
import { router, routerX, routerY } from './router'
import cors from 'cors';
import escapeHtml from 'escape-html';
import mongoMiddleware from './middleware/mongoMiddleware';
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
helmetConfig(app)
morganConfig(app)

// cors config:
const GlobalcorsOptions = {
    origin: ['https://w15fe.roozone.site', 'https://w15sh-fe.netlify.app'],
}

const ClientXoptions = {
    origin: 'https://w15sh-fe.netlify.app',
    methods: ['GET', 'POST'],
}
const ClientYoptions = {
    origin: 'https://w15fe.roozone.site',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }

app.use(cors(GlobalcorsOptions));

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