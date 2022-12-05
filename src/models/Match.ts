import Team from "./Team"

export default interface Match{
    teamA: Team
    teamB: Team
    //points
    pointsSet1A: number 
    pointsSet1B: number 
    pointsSet2A: number 
    pointsSet2B: number 
    pointsSet3A: number 
    pointsSet3B: number 
    pointsFairPlayA: number 
    pointsFairPlayB: number 
    id?: number 
}