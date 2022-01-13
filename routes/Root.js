import express from 'express';
const router = express.Router();
import {users} from '../data.js'

router.post('/', (req, res) => {
    res.send()
})

router.get('/', (req, res) => {
    res.send(users)
})

export default router;