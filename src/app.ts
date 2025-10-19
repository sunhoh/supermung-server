import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import router from '@/routes/todo.routes';

import todoRouter from './routes/todo.routes';

const app = express();
const port = 8080;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// middleware
app.use('/todos', router);

const isProduction = process.env.NODE_ENV === 'production';

// if(!isProduction) {
//     const openapiPath = path.resolve(process.cwd(), 'src', 'openapi.json');
//     const swaggerDocs = JSON.parse(fs.readFileSync(openapiPath, 'utf-8'));
//     app.use('/docs', swaggerUi.serveFiles(swaggerDocs), swaggerUi.setup(swaggerDocs));
// }

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});