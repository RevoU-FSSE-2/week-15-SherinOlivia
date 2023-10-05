import express, { Request, Response } from 'express';

const routerY = express.Router();

routerY.options('/', (req, res) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('X-Content-Type-Options', 'nosniff');
  res.sendStatus(200);
});

routerY.get('/', (req, res) => {
  res.json({ "message": "Hii, This is Collaborator's CORS-enabled route" });
});

routerY.post('/', (req, res) => {
  let body = req.body;
  res.json({ message: body });
})

export default routerY