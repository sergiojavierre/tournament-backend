import Team from '../../models/Team'

export default interface TeamRepository{
    findAll(): Promise<Team[]>
    findOne(name: string): Promise<Team | undefined>
    add(team: Team): Promise<Team | undefined>
}