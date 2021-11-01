
import * as express from 'express';
import * as bodyParser from "body-parser";
import { MessagesController } from './controller/MessagesController';

const app: express.Application = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', MessagesController);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});