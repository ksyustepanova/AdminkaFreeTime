import express from 'express';
import cors from 'cors';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import {Routes} from './services/routes';
import {CompanyRoutes} from './controllers/company';

const app: express.Application = express();
const port = 3000;
const routes: Array<Routes> = [];

app.use(cors());
app.use(express.json());


const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; 
}

app.use(expressWinston.logger(loggerOptions));

routes.push(new CompanyRoutes(app));

const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage)
});

app.listen(port, () => {
    console.log(runningMessage);
});