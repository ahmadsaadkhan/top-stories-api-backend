import express, { Router } from 'express';
import { fetchNews } from '../controller/actions';

const router: Router = express.Router();
router.get('/top-stories', fetchNews);

export default router;
