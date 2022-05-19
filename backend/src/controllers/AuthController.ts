import { Request, Response } from "express";
import { AuthServices } from "../auth/AuthServices";


export class AuthController {
    async signin(request: Request, response: Response) {
        try {

            const authService = new AuthServices()
            const {email, password} = request.body
            const autenticacao = await authService.signin(email, password)

            return response.json(autenticacao)
        } catch (error) {
            return response.status(400).send(error)
        }
    }

    async validateToken(request: Request, response: Response) {
        try {

            const authService = new AuthServices()
            const {token} = request.body
            const autenticacao = await authService.validateToken(token)

            return response.json(autenticacao)
        } catch (error) {
            return response.status(401).send(error)
        }
    }
}