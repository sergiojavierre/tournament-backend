import express from 'express';
import dotenv from "dotenv"

dotenv.config()

const app = express();
app.use(express.json())
const port = process.env.PORT

//routers
import { routerTeams } from './routes/teams.router';

app.use('/teams',routerTeams)

app.listen(process.env.PORT, () => {
  console.log(`Application started on port ${port}`);
});