import express, { Request, Response } from 'express'
import Group from '../models/Group'
import GroupRepositoryMySQL from '../repositories/groups/group.repository.mysql'

const router = express.Router()

const groupsRepository = new GroupRepositoryMySQL()

router.get('/', async ( req: Request, res: Response) => {
    try {
        const groups = await groupsRepository.findAll()
        res.send(groups)
    }
    catch (error) {
        res.send(error)
    }
})

router.post('/', async (req: Request, res: Response) => {
    const data : Group =  req.body
    const group = await groupsRepository.add(data)
    res.send(group)
})

export { router as routerGroups};