import Team from "./Team"

export default class Match{
    id: number
    datetime: Date
    teamA: Team
    teamB: Team
    //points
    pointsSet1A: number = 0
    pointsSet1B: number = 0
    pointsSet2A: number = 0
    pointsSet2B: number = 0
    pointsSet3A: number = 0
    pointsSet3B: number = 0
    pointsFairPlayA: number = 0
    pointsFairPlayB: number = 0

    constructor(
        id: number,
        datetime: Date,
        teamA: Team,
        teamB: Team,
        pointsSet1A?: number,
        pointsSet1B?: number,
        pointsSet2A?: number,
        pointsSet2B?: number,
        pointsSet3A?: number,
        pointsSet3B?: number,
        pointsFairPlayA?: number,
        pointsFairPlayB?: number
    ) {
        this.id = id;
        this.datetime = datetime;
        this.teamA = teamA;
        this.teamB = teamB;
        //points
        if(pointsSet1A)this.pointsSet1A = pointsSet1A;
        if(pointsSet1B)this.pointsSet1B = pointsSet1B;
        if(pointsSet2A)this.pointsSet2A = pointsSet2A;
        if(pointsSet2B)this.pointsSet2B = pointsSet2B;
        if(pointsSet3A)this.pointsSet3A = pointsSet3A;
        if(pointsSet3B)this.pointsSet3B = pointsSet3B;
        if(pointsFairPlayA)this.pointsFairPlayA = pointsFairPlayA;
        if(pointsFairPlayB)this.pointsFairPlayB = pointsFairPlayB;
               
    }
}