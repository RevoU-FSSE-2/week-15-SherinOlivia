import express, { Request, Response } from 'express';

const routerX = express.Router();

routerX.options('/', (req, res) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('X-Content-Type-Options', 'nosniff');
    res.sendStatus(200);
});

routerX.get('/', (req, res) => {
    res.json({ "message": "Hello! This is SH's Cors Enabled Route!" });
});
  
routerX.post('/', (req, res) => {
    let body = req.body;
    res.json({ message: body });
})

routerX.put('/', (req, res) => {
    let body = req.body;
    res.json({ message: body });
})

routerX.delete('/', (req, res) => {
    res.json({ "message": "Welp.. You don't really mean to delete me, now do you?" });
});

export default routerX