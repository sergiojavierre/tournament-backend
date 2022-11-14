import express, { Request, Response } from 'express'
import Group from '../models/Group'
import Team from '../models/Team'
import TeamsRepositoryMySQL from '../repositories/teams/team.repository.mysql'

const router = express.Router()

const teamsRepository = new TeamsRepositoryMySQL()

router.get('/', async (req: Request, res: Response) => {
    try {
        const teams = await teamsRepository.findAll()
        res.send(teams)
    }
    catch (error) {
        res.send(error)
    }
})

router.get('/:name', async (req: Request, res: Response) => {
    try {
        const team = await teamsRepository.findOne(req.params.name)
        res.send(team)
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
    const data = new Team(name, details, image, group)
    const team = await teamsRepository.add(data)
    res.send(team)
})

export { router as routerTeams};