import connection from "../../db/db";
import Group from "../../models/Group";
import GroupRepository from "./group.repository";

export default class GroupRepositoryMySQL implements GroupRepository {
  async findAll(): Promise<Group[]> {
    const sql = `select * from \`groups\``;
    try {
      const [data] = await connection.query(sql);
      return data as Group[];
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async add(group: Group): Promise<Group | undefined> {
    const sql = `insert into groups values ("${group.name}")`;
    try {
      await connection.query(sql);
      return group;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
}
