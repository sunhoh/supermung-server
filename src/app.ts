import express from 'express';
import path from 'path';
import fs from 'fs';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';


import authRouter from '@/routes/auth.routes';


const app = express();
const port = 8080;

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


const apiRouter = express.Router();

app.use('/api', apiRouter);

apiRouter.use('/auth', authRouter);

const isProduction = process.env.NODE_ENV === 'production';

if(!isProduction) {
    const openapiPath = path.resolve(process.cwd(), 'src', 'openapi.json');
    const swaggerDocs = JSON.parse(fs.readFileSync(openapiPath, 'utf-8'));
    app.use('/docs', swaggerUi.serveFiles(swaggerDocs), swaggerUi.setup(swaggerDocs));
}

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});