import express, { Request, Response } from 'express';
const router = express.Router();


// main app/page route
router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Hello, this is Sherin Olivia's Assignment for Week 15..~"
    })
})

export default router;