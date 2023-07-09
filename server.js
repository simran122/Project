import Express from "express";
import bodyParser from "body-parser";
import usersRoutes from './users.js'

import cors from 'cors';

const app = Express();
const port = 5000;
app.use(cors());


app.use(bodyParser.json());
app.use('/users', usersRoutes);
app.listen(port, () => console.log(`server running on port:http://localhost:${port}`));