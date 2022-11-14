import Group from './Group'

export default class Team{

    name: string
    details: string
    image: string
    points: number = 0
    group: Group

    constructor(name: string, details: string, image: string, group: Group) {
        this.name = name
        this.details = details
        this.image = image
        this.group = group
    }

    setPoints(points: number) {
        this.points = points
    }
}