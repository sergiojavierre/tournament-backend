import Group from './Group'

export default class Team{

    name: string
    details: string | undefined
    image: string | undefined
    points: number | undefined
    group: Group | undefined

    constructor(name: string, details?: string, image?: string, group?: Group, points?: number) {
        this.name = name
        this.details = details
        this.image = image
        this.group = group
        this.points = points
    }
}