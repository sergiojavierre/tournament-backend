import Team from '../../models/Team'

export default interface TeamRepository{
    findAll(): Promise<Team[]>
    add(team: Team): Promise<Team | undefined>
}