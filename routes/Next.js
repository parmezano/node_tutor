import express from 'express';
import path from "path";
const router = express.Router();

router.get('/', (req,res) => {
   res.send('<h1>Otvet next</h1>');
   // res.sendFile('');
});

export default router;