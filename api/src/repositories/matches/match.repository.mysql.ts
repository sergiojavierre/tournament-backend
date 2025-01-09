import Match from "../../models/Match";
import MatchRepository from "./match.repository";
import Team from "../../models/Team";
import TeamsRepositoryMySQL from "../teams/team.repository.mysql";
import connection from "../../db/db";
import { RowDataPacket } from "mysql2";

export default class MatchRepositoryMySQL implements MatchRepository {
  async findAll(): Promise<Match[]> {
    const sql = `
        select m.*, tA.image as teamAImage, tB.image as teamBImage
        from matches m 
        join teams tA on m.teamA = tA.name  
        join teams tB on m.teamB = tB.name  
        order by m.datetime desc`;
    try {
      const [rows] = (await connection.query(sql)) as any[];
      const matches: Match[] = [];
      rows.forEach((item) => {
        const teamA: Team = {
          name: item.teamA,
          image: item.teamAImage,
        };
        const teamB: Team = {
          name: item.teamB,
          image: item.teamBImage,
        };
        const match: Match = {
          teamA,
          teamB,
          pointsSet1A: item.pointsSet1,
          pointsSet1B: item.pointsSet1B,
          pointsSet2A: item.pointsSet2A,
          pointsSet2B: item.pointsSet2B,
          pointsSet3A: item.pointsSet3A,
          pointsSet3B: item.pointsSet3B,
          pointsFairPlayA: item.pointsFairPlayA,
          pointsFairPlayB: item.pointsFairPlayB,
          id: item.id,
        };
        matches.push(match);
      });
      return matches;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async add(match: Match): Promise<Match | undefined> {
    try {
      const sql = `
            insert into matches 
                (teamA, teamB, pointsSet1A, pointsSet1B, pointsSet2A, pointsSet2B, pointsSet3A, pointsSet3B, pointsFairPlayA, pointsFairPlayB)
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
            `;
      await connection.query(sql);
      return match;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
}
