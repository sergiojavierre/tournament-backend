import Group from '../../models/Group'

export default interface GroupRepository{
    findAll(): Promise<Group[]>
    add(group: Group): Promise<Group | undefined>
}