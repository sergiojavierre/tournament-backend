import express, { Request, Response } from 'express'
import Group from '../models/Group'
import Team from '../models/Team'
import TeamsRepositoryMySQL from '../repositories/teams/team.repository.mysql'

const router = express.Router()

const teamsRepository = new TeamsRepositoryMySQL()

router.get('/:group', async (req: Request, res: Response) => {
    try {
        const teams = await teamsRepository.findAll(req.params.group)
        res.send(teams)
    }
    catch (error) {
        res.send(error)
    }
})

router.post('/', async (req: Request, res: Response) => {
    const name = req.body.name
    const details = req.body.details
    const image = req.body.image
    const group = new Group(req.body.group)
    const data = new Team(name, details, image, group, 0)
    const team = await teamsRepository.add(data)
    res.send(team)
})

export { router as routerTeams};