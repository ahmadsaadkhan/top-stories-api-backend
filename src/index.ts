import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import router from './router';
import dotenv from 'dotenv';
import compression from 'compression'
import cors from 'cors'

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors({
    credentials: true,
}))
app.use(compression())
const port = 8000;
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}/`);
});
app.use('/', router);