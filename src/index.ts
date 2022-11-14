import express from 'express';
import dotenv from "dotenv"
import cors from 'cors';

dotenv.config()

const app = express();
app.use(express.json())
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));

const port = process.env.PORT

//routers
import { routerGroups } from './routes/groups.router';
import { routerTeams } from './routes/teams.router';
import { routerMatches } from './routes/matches.router';

app.use('/groups',routerGroups)
app.use('/teams',routerTeams)
app.use('/matches',routerMatches)

app.listen(process.env.PORT, () => {
  console.log(`Application started on port ${port}`);
});