import Match from "../../models/Match";
import MatchRepository from "./match.repository";
import {executeQuery} from '../../db/mysql.connector'
import Team from "../../models/Team";
import TeamsRepositoryMySQL from "../teams/team.repository.mysql";

const teamsRepository = new TeamsRepositoryMySQL()

export default class MatchRepositoryMySQL implements MatchRepository {
    


    async findAll(): Promise<Match[]> {
        const sql = `
        select m.*, tA.image as teamAImage, tB.image as teamBImage
        from matches m 
        join teams tA on m.teamA = tA.name  
        join teams tB on m.teamB = tB.name  
        order by m.datetime desc`
        try {
            const results : Match[] = await executeQuery<Match[]>(sql)           
            return results;
        }
        catch (error) {
            console.error(error);
            return [] ;
        }
    }
    async findByName(name: string): Promise<Match[]> {
        const sql = `
        select m.*, tA.image as teamAImage, tB.image as teamBImage
        from matches m 
        join teams tA on m.teamA = tA.name  
        join teams tB on m.teamB = tB.name  
        where teamA = "${name}" or teamB = "${name}" order by datetime desc`

        try {
            const matchesByTeam : Match[] = await executeQuery<Match[]>(sql)           
            return matchesByTeam;
        }
        catch (error) {
            console.error(error);
            return [] ;
        }
    }
    async add(match: Match): Promise<Match | undefined> {
        
        try {
            // const sql = `insert into matches values ("${match.datetime.toLocaleString()}","${match.teamA}","${match.teamB}",${match.pointsA},${match.pointsB})`
            // await executeQuery<Match[]>(sql) 

            // const teamA : Team =  await teamsRepository.findOne(match.teamA)
            // teamA.points += Number(match.pointsA)
            // await teamsRepository.update(teamA)

            // const teamB : Team = await teamsRepository.findOne(match.teamB)
            // teamB.points += Number(match.pointsB)
            // await teamsRepository.update(teamB)
          
            return match;
        }
        catch (error) {
            console.error(error);
            //return new Match(new Date(),'','',0,0) ;
        }
    }

    
}