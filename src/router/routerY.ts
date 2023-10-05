import express, { Request, Response } from 'express';

const routerY = express.Router();

routerY.options('/', (req, res) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('X-Content-Type-Options', 'nosniff');
  res.sendStatus(200);
});

routerY.get('/', (req, res) => {
  res.json({ "message": "Hii, This is the 2nd CORS-enabled route!" });
});

routerY.post('/', (req, res) => {
  let body = req.body;
  res.json({ message: body });
})

routerY.put('/', (req, res) => {
  let body = req.body;
  res.json({ message: body });
})

routerY.delete('/', (req, res) => {
  res.json({ "message": "Welp.. You don't really mean to delete me too, now do you??" });
});

export default routerY