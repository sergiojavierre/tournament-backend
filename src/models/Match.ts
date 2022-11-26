import Team from "./Team"

export default class Match{
    id: number | undefined
    teamA: Team
    teamB: Team
    //points
    pointsSet1A: number | undefined
    pointsSet1B: number | undefined
    pointsSet2A: number | undefined
    pointsSet2B: number | undefined
    pointsSet3A: number | undefined
    pointsSet3B: number | undefined
    pointsFairPlayA: number | undefined
    pointsFairPlayB: number | undefined

    constructor(
        teamA: Team,
        teamB: Team,
        pointsSet1A?: number,
        pointsSet1B?: number,
        pointsSet2A?: number,
        pointsSet2B?: number,
        pointsSet3A?: number,
        pointsSet3B?: number,
        pointsFairPlayA?: number,
        pointsFairPlayB?: number,
        id?: number
    ) {
        this.teamA = teamA;
        this.teamB = teamB;
        this.id = id;
        //points
        this.pointsSet1A = pointsSet1A;
        this.pointsSet1B = pointsSet1B;
        this.pointsSet2A = pointsSet2A;
        this.pointsSet2B = pointsSet2B;
        this.pointsSet3A = pointsSet3A;
        this.pointsSet3B = pointsSet3B;
        this.pointsFairPlayA = pointsFairPlayA;
        this.pointsFairPlayB = pointsFairPlayB;
               
    }
}