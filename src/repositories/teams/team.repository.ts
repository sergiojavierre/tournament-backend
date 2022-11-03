import Team from '../../models/Team'

export default interface TeamRepository{
    findAll(): Promise<Team[]>
    findOne(name: string): Promise<Team>
    add(team: Team): Promise<Team>
}