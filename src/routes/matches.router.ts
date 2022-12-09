import express, { Request, Response } from 'express'
import Match from '../models/Match'
import Team from '../models/Team'
import MatchRepositoryMySQL from '../repositories/matches/match.repository.mysql'
import TeamsRepositoryMySQL from '../repositories/teams/team.repository.mysql'

const router = express.Router()

const matchesRepository = new MatchRepositoryMySQL()
const teamsRepository = new TeamsRepositoryMySQL()

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
    console.log(req.body);
    
    //match
    const teamA: Team = { name: req.body.teamA.name }
    const pointsSet1A = req.body.pointsSet1A
    const pointsSet2A = req.body.pointsSet2A
    const pointsSet3A = req.body.pointsSet3A
    const pointsFairPlayA = req.body.pointsFairPlayA
    const teamB: Team = { name: req.body.teamB.name }
    const pointsSet1B = req.body.pointsSet1B
    const pointsSet2B = req.body.pointsSet2B
    const pointsSet3B = req.body.pointsSet3B
    const pointsFairPlayB = req.body.pointsFairPlayB
    //points to update
    const pointsMatchA = req.body.pointsMatchA
    const pointsMatchB = req.body.pointsMatchB
    const setsWinA = req.body.setsWinA
    const setsWinB = req.body.setsWinB
    const pointsAchievedA = req.body.pointsAchievedA
    const pointsAchievedB = req.body.pointsAchievedB
    const pointsAgainstA = req.body.pointsAgainstA
    const pointsAgainstB = req.body.pointsAgainstB

    
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
    await teamsRepository.update(teamA, pointsMatchA, setsWinA, pointsAchievedA, pointsAgainstA, pointsFairPlayA)
    await teamsRepository.update(teamB, pointsMatchB, setsWinB, pointsAchievedB, pointsAgainstB, pointsFairPlayB)
    res.send(match)
})

export { router as routerMatches};