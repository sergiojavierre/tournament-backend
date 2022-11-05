import Team from '../../models/Team'
import TeamRepository from "./team.repository";
import {executeQuery} from '../../db/mysql.connector'

export default class TeamsRepositoryMySQL implements TeamRepository{

    async findAll(): Promise<Team[]> {
        const sql = `select * from teams order by points desc`        
        try {
            const teamsFromDatabase : Team[] = await executeQuery<Team[]>(sql)           
            return teamsFromDatabase
        }
        catch (error) {
            console.error(error);
            return [] 
        }
    }

    async findOne(name:String): Promise<Team> {
        const sql = `select * from teams where name = "${name}"`
        try {
            const teams : Team[] = await executeQuery<Team[]>(sql)           
            return teams[0]
        }
        catch (error) {
            console.error(error);
            return new Team('','','') 
        }
    }

    async add(team: Team): Promise<Team>{
        const sql = `insert into teams values ("${team.name}","${team.details}","${team.image}")`
        try {
            await executeQuery<Team>(sql)           
            return team
        }
        catch (error) {
            console.error(error);
            return new Team('','',''); 
        }
    }


}