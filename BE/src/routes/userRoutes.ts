import express from 'express'
import getAllUsers from "../controllers/user/getAllUsers";
import getUserProfile from '../controllers/user/getUserProfile';

const router = express.Router();

router.get('/list', getAllUsers);
router.get('/:id', getUserProfile);
export default router;