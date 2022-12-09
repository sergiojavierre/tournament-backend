import Group from '../../models/Group'
import Team from '../../models/Team'
import TeamRepository from "./team.repository";
import {executeQuery} from '../../db/mysql.connector'

export default class TeamsRepositoryMySQL implements TeamRepository{

    async findAll(group: String): Promise<Team[]> {
//        const sql = `select * from teams where \`group\` = "${group}" order by pointsMatches desc, pointsSets desc, pointsAchieved desc, (pointsAchieved-pointsAgainst) desc, pointsFairplay desc`     
        const sql = `select * from teams where \`group\` = "${group}" order by pointsMatches desc, pointsSets desc, pointsAchieved desc, pointsAgainst asc, pointsFairplay desc`     

        const teams: Team[] = []
        try {
            const data: any[] = await executeQuery<Team[]>(sql)
            data.forEach(item => {
                const group: Group = {
                    name: item.group
                }
                const team: Team = {
                    name: item.name,
                    details: item.details,
                    image: item.image,
                    logo: item.logo,
                    group: group,
                    pointsMatches: item.pointsMatches,
                    pointsSets: item.pointsSets,
                    pointsAchieved: item.pointsAchieved,
                    pointsAgainst: item.pointsAgainst,
                    pointsFairplay: item.pointsFairplay
                }
                teams.push(team)
            })
            return teams
        }
        catch (error) {
            console.error(error);
            return [] 
        }
    }

    async findAllReduced(group: String): Promise<Team[]> {
        const sql = `select name from teams where \`group\` = "${group}"`     
        const teams : Team[] = []
        try {
            const data: any[] = await executeQuery<Team[]>(sql)
            data.forEach(item => {
                const team: Team = {
                    name: item.name
                }
                teams.push(team)
            })
            return teams
        }
        catch (error) {
            console.error(error);
            return [] 
        }
    }


    async add(team: Team): Promise<Team | undefined> {
        const sql = `insert into teams (name, details, image, \`group\`) values ("${team.name}","${team.details}","${team.image}", "${team.group?.name}")`        
        try {
            await executeQuery<Team>(sql)           
            return team
        }
        catch (error) {
            console.error(error);
            return undefined; 
        }
    }

    async update(team: Team, pointsMatch: Number, setsWin: Number, pointsAchieved: Number, pointsAgainst: Number, pointsFairplay: Number): Promise<Team | undefined>{
        const sql = `
            update teams
            set pointsMatches = pointsMatches + "${pointsMatch}", 
            pointsSets = pointsSets + "${setsWin}", 
            pointsAchieved = pointsAchieved + "${pointsAchieved}", 
            pointsAgainst = pointsAgainst + "${pointsAgainst}", 
            pointsFairplay = pointsFairplay + "${pointsFairplay}"
            where name = "${team.name}"
        `        
        console.log(sql);
        
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