import Group from '../../models/Group'
import GroupRepository from "./group.repository";
import {executeQuery} from '../../db/mysql.connector'

export default class GroupRepositoryMySQL implements GroupRepository{

    async findAll(): Promise<Group[]> {
        const sql = `select * from groups`        
        try {
            const results : Group[] = await executeQuery<Group[]>(sql)           
            return results
        }
        catch (error) {
            console.error(error);
            return [] 
        }
    }

    async add(group: Group): Promise<Group | undefined>{
        const sql = `insert into groups values ("${group.name}")`
        try {
            await executeQuery<Group>(sql)           
            return group
        }
        catch (error) {
            console.error(error);
            return undefined; 
        }
    }


}