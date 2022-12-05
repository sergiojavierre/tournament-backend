import Group from './Group'

export default interface Team{
    name: string
    details?: string
    image?: string
    logo?: string
    group?: Group 
    pointsMatches?: number
    pointsSets?: number
    pointsAchieved?: number
    pointsAgainst?: number
    pointsFairplay?: number
}