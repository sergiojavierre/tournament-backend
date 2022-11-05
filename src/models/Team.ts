export default class Team{

    name: string
    details: string
    image: string
    points: number = 0

    constructor(name: string, details: string, image: string) {
        this.name = name
        this.details = details
        this.image = image
    }

    setPoints(points: number) {
        this.points = points
    }
}