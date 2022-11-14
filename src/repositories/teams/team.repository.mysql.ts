import Group from '../../models/Group'
import Team from '../../models/Team'
import TeamRepository from "./team.repository";
import {executeQuery} from '../../db/mysql.connector'

export default class TeamsRepositoryMySQL implements TeamRepository{

    async findAll(): Promise<Team[]> {
        const sql = `select * from teams order by points desc`     
        const teams : Team[] = []
        try {
            const data: any[] = await executeQuery<Team[]>(sql)
            data.forEach(item => {
                teams.push(new Team(item.name, item.details, item.image, new Group(item.group)))
            })
            return teams
        }
        catch (error) {
            console.error(error);
            return [] 
        }
    }

    async findOne(name:String): Promise<Team | undefined> {
        const sql = `select * from teams where name = "${name}"`
        try {
            const teams : Team[] = await executeQuery<Team[]>(sql)           
            return teams[0]
        }
        catch (error) {
            console.error(error);
            return undefined 
        }
    }

    async add(team: Team): Promise<Team | undefined> {
        const sql = `insert into teams (name, details, image, \`group\`) values ("${team.name}","${team.details}","${team.image}", "${team.group.name}")`        
        try {
            await executeQuery<Team>(sql)           
            return team
        }
        catch (error) {
            console.error(error);
            return undefined; 
        }
    }


}