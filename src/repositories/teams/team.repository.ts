import Team from '../../models/Team'

export default interface TeamRepository{
    findAll(group: String): Promise<Team[]>
    findAllReduced(group: String): Promise<Team[]>
    add(team: Team): Promise<Team | undefined>
}