import { Request, Response } from "express";
import { UserServices } from "../services/UserServices";


export class UserController {
    //private readonly userServices = new UserServices()

    async save(request: Request, response: Response) {
        try {
            const userServices = new UserServices()
            const dataUser = request.body
            const userCreated = await userServices.save(dataUser) 
            
            return response.json(userCreated) 
        } catch (error) {
            return response.status(400).send(error)
        }
    }

    async update(request: Request, response: Response) {
        try {
            const userServices = new UserServices()
            const dataUserUpdated = request.body
            const idUser = request.params.id

            const userUpdated = await userServices.update(dataUserUpdated, idUser)

            return response.json(userUpdated)
        } catch (error) {
            return response.status(400).send(error)
        }
    }

    async findById(request: Request, response: Response) {
        try {
            const userServices = new UserServices()
            const id = request.params.id

            const user = await userServices.findById(id)
            return response.json(user)
        } catch (error) {
            return response.status(400).send(error)
        }
    }
    
}