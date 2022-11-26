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
            const results: any[] = await executeQuery<any[]>(sql) 
            const matches : Match[]= []
            results.forEach((item) => {
                matches.push(
                    new Match(
                        new Team(
                            item.teamA,
                            undefined,
                            item.teamAImage
                        ),
                        new Team(
                            item.teamA,
                            undefined,
                            item.teamAImage
                        ),
                        item.pointsSet1A,
                        item.pointsSet1B,
                        item.pointsSet2A,
                        item.pointsSet2B,
                        item.pointsSet3A,
                        item.pointsSet3B,
                        item.pointsFairPlayA,
                        item.pointsFairPlayB,
                        item.id
                    )
                )
            })
            return matches;
        }
        catch (error) {
            console.error(error);
            return [] ;
        }
    }

    async add(match: Match): Promise<Match | undefined> {
        try {
            const sql = `
            insert into matches (
                teamA, 
                teamB, 
                pointsSet1A, 
                pointsSet1B, 
                pointsSet2A, 
                pointsSet2B, 
                pointsSet3A, 
                pointsSet3B, 
                pointsFairPlayA, 
                pointsFairPlayB)
            values (
                '${match.teamA.name}', 
                '${match.teamB.name}', 
                '${match.pointsSet1A}', 
                '${match.pointsSet1B}', 
                '${match.pointsSet2A}', 
                '${match.pointsSet2B}', 
                '${match.pointsSet3A}', 
                '${match.pointsSet3B}', 
                '${match.pointsFairPlayA}', 
                '${match.pointsFairPlayB}'
            )
            `
            await executeQuery<Match[]>(sql)           
            return match;
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    }

    
}