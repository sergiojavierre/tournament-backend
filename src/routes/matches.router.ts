import express, { Request, Response } from 'express'
import Match from '../models/Match'
import Team from '../models/Team'
import MatchRepositoryMySQL from '../repositories/matches/match.repository.mysql'

const router = express.Router()

const matchesRepository = new MatchRepositoryMySQL()

router.get('/', async ( req: Request, res: Response) => {
    try {
        const matches = await matchesRepository.findAll()
        res.send(matches)
    }
    catch (error) {
        res.send(error)
    }
})

router.post('/', async (req: Request, res: Response) => {
    //teams
    const teamA: Team = { name: req.body.teamA.name }
    const teamB: Team = { name: req.body.teamB.name }
    //points
    const pointsSet1A = req.body.pointsSet1A
    const pointsSet1B = req.body.pointsSet1B
    const pointsSet2A = req.body.pointsSet2A
    const pointsSet2B = req.body.pointsSet2B
    const pointsSet3A = req.body.pointsSet3A
    const pointsSet3B = req.body.pointsSet3B
    const pointsFairPlayA = req.body.pointsFairPlayA
    const pointsFairPlayB = req.body.pointsFairPlayB
    const match: Match = {
            teamA,
            teamB,
            pointsSet1A,
            pointsSet1B,
            pointsSet2A,
            pointsSet2B,
            pointsSet3A,
            pointsSet3B,
            pointsFairPlayA,
            pointsFairPlayB
    }
    await matchesRepository.add(match)
    res.send(match)
})

export { router as routerMatches};