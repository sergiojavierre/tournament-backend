import Match from "../../models/Match"

export default interface MatchRepository{

    findAll(): Promise<Match[]>
    add(match: Match): Promise<Match | undefined>
}